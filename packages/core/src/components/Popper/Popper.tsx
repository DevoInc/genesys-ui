import * as React from 'react';
import * as PopperJS from '@popperjs/core';
import { usePopper } from 'react-popper';
import ReactDOM from 'react-dom';

import {
  useAddPropsToChildren,
  useStateFromProps,
  useOnEventOutside,
} from '../../hooks';
import { StyledPopper } from './StyledPopper';
import { StyledPopperArrow, StyledPopperArrowProps } from './StyledPopperArrow';
import {
  GlobalAriaProps,
  GlobalAttrProps,
  TriggerAriaProps,
} from '../../declarations';

export interface PopperProps
  extends StyledPopperArrowProps,
    //native
    GlobalAttrProps,
    GlobalAriaProps,
    Pick<TriggerAriaProps, 'aria-expanded'> {
  /** DOM element where the popper is appended. It is appended to the body
   * by default. */
  appendTo?: HTMLElement;
  /** Popper arrow. */
  arrow?: React.ReactElement;
  /** Popper content. */
  children?: React.ReactNode;
  /** This prop defines if Popper is positioned using CSS transform
   * (false) or CSS positions (true). */
  hasGpuAcceleration?: boolean;
  /** Constant to use with a custom useState to manage the visibility of the
   * Popper. */
  visible?: boolean;
  /** Offset of the Popper with respect to the trigger. */
  offset?: [number, number];
  /** This prop defines if the Popper is positioned absolute or fixed. */
  strategy?: PopperJS.PositioningStrategy;
  /** Function to use with a custom useState to manage the visibility of the
   * Popper. */
  setIsVisible?: (isVisible: boolean) => void;
  /** Trigger is a clickable component. This component needs to be created with
   * forwardRef. */
  trigger?: React.ReactElement;
}

export const Popper: React.FC<PopperProps> = ({
  appendTo = document.body,
  'aria-expanded': ariaExpanded,
  arrow,
  children,
  hasGpuAcceleration,
  visible: isVisibleExternalState,
  offset = [0, 10],
  placement = 'auto',
  setIsVisible: setIsVisibleExternalState,
  strategy = 'absolute',
  trigger,
  zIndex,
  ...nativeProps
}) => {
  // Visibility - State
  const [isVisible, setIsVisible] = useStateFromProps(
    isVisibleExternalState,
    setIsVisibleExternalState
  );
  const setIsVisibleFalse = () => setIsVisible(false);
  // Elements - States
  const [triggerRef, setTriggerRef] = React.useState();
  const popperRef = React.useRef<HTMLDivElement>();
  const arrowRef = React.useRef<HTMLDivElement>();
  // Modifiers settings - Popper
  const modifiers = React.useMemo(() => {
    const options: Array<Partial<PopperJS.Modifier<any, any>>> = [
      {
        name: 'computeStyles',
        options: {
          gpuAcceleration: hasGpuAcceleration,
        },
      },
      {
        name: 'offset',
        options: {
          offset: offset,
        },
      },
    ];
    if (arrow) {
      options.push({
        name: 'arrow',
        options: {
          element: arrowRef,
          padding: 10,
        },
      });
    }
    return options;
  }, [arrow, arrowRef, hasGpuAcceleration, offset]);
  // Popper - Hook
  const { styles, attributes } = usePopper(triggerRef, popperRef.current, {
    placement,
    strategy,
    modifiers,
  });
  // Click Outside - Hook
  useOnEventOutside({
    references: [triggerRef, popperRef],
    handler: setIsVisibleFalse,
  });
  // Attributes and Styles - Popper
  const isTriggerHidden = attributes?.popper?.['data-popper-reference-hidden'];
  const placementPopper = attributes?.popper?.[
    'data-popper-placement'
  ] as PopperJS.Placement;
  // Cloned - Components
  const wrappedClick = (event: MouseEvent) => {
    event.stopPropagation();
    setIsVisible(!isVisible);
    trigger?.props?.onClick?.();
  };
  const triggerCmp = useAddPropsToChildren(trigger, {
    onClick: wrappedClick,
    state: isVisible ? 'expanded' : undefined,
    ref: setTriggerRef,
  });
  const childrenCmp = useAddPropsToChildren(children, {
    placement: placementPopper,
    zIndex: zIndex && 'auto',
  });
  const arrowCmp = useAddPropsToChildren(arrow, {
    placement: placementPopper,
  });

  const PopperCmp = (
    <StyledPopper
      {...nativeProps}
      aria-expanded={ariaExpanded || isVisible}
      hiddenTrigger={!!isTriggerHidden}
      ref={(instance) => {
        if (instance) {
          popperRef.current = instance;
        }
      }}
      style={styles.popper}
      zIndex={zIndex}
    >
      {childrenCmp}
      {arrow && (
        <StyledPopperArrow
          ref={(instance) => {
            if (instance) {
              arrowRef.current = instance;
            }
          }}
          placement={placementPopper}
          style={styles.arrow}
          zIndex={zIndex}
        >
          {arrowCmp}
        </StyledPopperArrow>
      )}
    </StyledPopper>
  );

  return (
    <>
      {triggerCmp}
      {isVisible &&
        (appendTo ? ReactDOM.createPortal(PopperCmp, appendTo) : PopperCmp)}
    </>
  );
};

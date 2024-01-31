import * as React from 'react';
import ReactDOM from 'react-dom';
import { useTheme } from 'styled-components';
import { type PopperProps, StrictModifier, usePopper } from 'react-popper';
import { ComputedPlacement, Padding } from '@popperjs/core';

import { useOnEventOutside } from '../../hooks';

import { POPOVER_DEFAULT_ARROW_SIZE } from './constants';

import { getPxFromRem } from '../../helpers';

import {
  PopoverPanel,
  StyledPopoverArrow,
  StyledPopoverArrowProps,
} from './components';

type TriggerProps = (props: {
  ref: React.Dispatch<React.SetStateAction<HTMLElement>>;
  toggle: (ev: React.MouseEvent<HTMLElement>) => void;
  isOpened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => React.ReactNode;

type ChildrenProps =
  | React.ReactNode
  | ((props: {
      toggle: (ev: React.MouseEvent<HTMLElement>) => void;
      isOpened: boolean;
      placement: ComputedPlacement;
      setOpened: React.Dispatch<React.SetStateAction<boolean>>;
    }) => React.ReactNode);

export interface PopoverProps
  extends Omit<
    PopperProps<unknown>,
    'children' | 'innerRef' | 'referenceElement' | 'onFirstUpdate' | 'modifiers'
  > {
  /** DOM element where the popper is appended. It is appended to the body
   * by default. */
  appendTo?: HTMLElement | null;
  disableOutsideEvent?: boolean;
  /** The HTML id attribute which is added to the wrapper div of the floating content and should be used as 'aria-controls' value of the trigger. */
  id: React.HTMLAttributes<HTMLDivElement>['id'];
  children?: [TriggerProps, ChildrenProps];
  /** If the floating content is visible/opened by default. */
  isOpened?: boolean;
  /** The configuration for the popover arrow: used component, padding... etc. */
  arrowConfig?: {
    component: (arrowProps: StyledPopoverArrowProps) => React.ReactNode;
    padding?: Padding;
    size?: StyledPopoverArrowProps['size'];
  };
  modifiers?: StrictModifier[];
  zIndex?: number;
}

const defaultAppendToProp =
  typeof window !== 'undefined' ? document.body : null;

export const InternalPopover: React.FC<PopoverProps> = ({
  arrowConfig,
  appendTo = defaultAppendToProp,
  children: [triggerEl, childrenEl],
  disableOutsideEvent = false,
  id,
  isOpened = false,
  modifiers = [],
  placement,
  strategy = 'fixed',
  zIndex,
}) => {
  const theme = useTheme();
  const evalZIndex = zIndex || theme.alias.elevation.zIndex.depth.activated;
  const [opened, setOpened] = React.useState(isOpened);

  const [referenceElement, setReferenceElement] =
    React.useState<HTMLElement>(null);
  const [popperElement, setPopperElement] =
    React.useState<HTMLDivElement>(null);
  const [arrowRef, setArrowRef] = React.useState<HTMLElement>(null);
  const arrowModifiers = React.useMemo(() => {
    return arrowConfig
      ? [
          {
            name: 'arrow',
            options: {
              element: arrowRef,
              padding:
                arrowConfig?.padding ??
                getPxFromRem(theme.cmp.panel.shape.borderRadius) * 2,
            },
          },
          {
            name: 'offset',
            options: {
              offset: [0, arrowConfig.size || POPOVER_DEFAULT_ARROW_SIZE],
            },
          },
        ]
      : [];
  }, [arrowConfig, arrowRef, theme.cmp.panel.shape.borderRadius]);

  const evalPlacement = placement || (arrowConfig ? 'auto' : 'auto-start');

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [...arrowModifiers, ...modifiers],
    placement: evalPlacement,
    strategy,
  });

  const dynamicPlacement = attributes?.popper?.['data-popper-placement'];

  const arrowDefaultStyles = () => {
    if (dynamicPlacement?.includes('top')) return { bottom: '0' };
    if (dynamicPlacement?.includes('bottom')) return { top: '0' };
    if (dynamicPlacement?.includes('left')) return { right: '0' };
    if (dynamicPlacement?.includes('right')) return { left: '0' };
    return {};
  };

  const toggle = (ev: React.MouseEvent<HTMLElement>): void => {
    const from = (ev?.target as HTMLElement).parentElement;
    const to = ev?.relatedTarget as HTMLElement;
    const isChild = to instanceof Node && from?.contains(to);

    if (!isChild) {
      setOpened((prevState) => !prevState);
    }
  };

  useOnEventOutside({
    references: [referenceElement, popperElement],
    handler: () => setOpened(false),
    disabled: disableOutsideEvent,
  });

  const PopperCmp = opened && referenceElement && (
    <div
      id={id}
      ref={setPopperElement}
      style={{
        zIndex: evalZIndex,
        ...styles.popper,
      }}
      {...attributes.popper}
    >
      {React.isValidElement(childrenEl)
        ? childrenEl
        : typeof childrenEl === 'function'
          ? childrenEl({
              toggle,
              isOpened: opened,
              placement: (dynamicPlacement as ComputedPlacement) ?? undefined,
              setOpened,
            })
          : null}
      {arrowConfig && (
        <div
          ref={setArrowRef}
          style={{
            zIndex: evalZIndex + 1,
            ...arrowDefaultStyles(),
            ...styles.arrow,
          }}
        >
          {arrowConfig.component({
            placement: (dynamicPlacement as ComputedPlacement) ?? undefined,
            size: arrowConfig.size ?? undefined,
          })}
        </div>
      )}
    </div>
  );

  return (
    <>
      {triggerEl({
        ref: setReferenceElement,
        toggle,
        isOpened: opened,
        setOpened,
      })}
      {opened &&
        referenceElement &&
        (appendTo ? ReactDOM.createPortal(PopperCmp, appendTo) : PopperCmp)}
    </>
  );
};

export const Popover = InternalPopover as typeof InternalPopover & {
  Arrow: typeof StyledPopoverArrow;
  Panel: typeof PopoverPanel;
};

Popover.Arrow = StyledPopoverArrow;
Popover.Panel = PopoverPanel;

InternalPopover.displayName = 'Popover';

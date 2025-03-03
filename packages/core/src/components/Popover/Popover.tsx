import * as React from 'react';
import { createPortal } from 'react-dom';
import { useTheme } from 'styled-components';
import { type PopperProps, StrictModifier, usePopper } from 'react-popper';
import { ComputedPlacement, Padding } from '@popperjs/core';

import { useOnEventOutside } from '../../hooks';
import { PopoverArrow, PopoverArrowProps, PopoverPanel } from './components';
import { type StyledPopoverArrowProps } from './components/PopoverArrow/StyledPopoverArrow';

type TTriggerProps = (props: {
  ref: React.Dispatch<React.SetStateAction<HTMLElement>>;
  toggle: (ev: React.MouseEvent<HTMLElement>) => void;
  isOpened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => React.ReactNode;

type TChildrenProps =
  | React.ReactNode
  | ((props: {
      toggle?: (ev: React.MouseEvent<HTMLElement>) => void;
      isOpened?: boolean;
      placement?: ComputedPlacement;
      setOpened?: React.Dispatch<React.SetStateAction<boolean>>;
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
  children?: [TTriggerProps, TChildrenProps];
  /** If the floating content is visible/opened by default. */
  isOpened?: boolean;
  /** The configuration for the popover arrow: used component, padding... etc. */
  arrowConfig?: {
    component: (arrowProps: PopoverArrowProps) => React.ReactNode;
    padding?: Padding;
    size?: StyledPopoverArrowProps['$size'];
  };
  modifiers?: StrictModifier[];
  /** Time in milliseconds before the popover opens after being triggered. */
  delayOnOpen?: number;
  /** Time in milliseconds before the popover closes after being triggered. */
  delayOnClose?: number;
  zIndex?: number;
  onClose?: () => void;
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
  delayOnOpen = 0,
  delayOnClose = 0,
  onClose,
  placement,
  strategy = 'fixed',
  zIndex,
}) => {
  const theme = useTheme();
  const evalZIndex = zIndex || theme.cmp.popover.elevation.zIndex.base;
  const [opened, setActualOpened] = React.useState<boolean>(isOpened);
  const delayedOpening = React.useRef<boolean>(isOpened);
  const delayedFn = React.useRef(null);

  const setDelayedOpen = () => {
    if (delayedOpening.current !== opened) {
      setActualOpened(delayedOpening.current);
    }
    delayedFn.current = null;
  };

  const setOpened = (state: any) => {
    if (typeof state === 'function') {
      const newState = state(delayedOpening.current);
      if (delayOnOpen <= 0 && delayOnClose <= 0) {
        delayedOpening.current = newState;
        return setActualOpened(state);
      }
      return setOpened(newState);
    }
    if (delayedFn.current != null) {
      clearTimeout(delayedFn.current);
    }
    delayedOpening.current = state;
    const delay = state ? delayOnOpen : delayOnClose;
    if (delay <= 0) {
      setActualOpened(state);
    } else {
      delayedFn.current = setTimeout(setDelayedOpen, delay);
    }
  };

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
              padding: arrowConfig?.padding,
            },
          },
          {
            name: 'offset',
            options: {
              offset: [
                0,
                arrowConfig.size || theme.cmp.popover.arrow.size.square.inner,
              ],
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
    const from = (ev?.target as HTMLElement)?.parentElement;
    const to = ev?.relatedTarget as HTMLElement;
    const isChild = to instanceof Node && from?.contains(to);

    if (!isChild) {
      ev.stopPropagation();
      setOpened((prevState) => !prevState);
      opened && onClose?.();
    }
  };

  useOnEventOutside({
    references: [referenceElement, popperElement],
    handler: () => {
      setOpened(false);
      opened && onClose?.();
    },
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
      {arrowConfig && (
        <div
          ref={setArrowRef}
          style={{
            zIndex: evalZIndex + 1,
            ...styles.arrow,
            ...arrowDefaultStyles(),
          }}
        >
          {arrowConfig.component({
            placement: (dynamicPlacement as ComputedPlacement) ?? undefined,
            size: arrowConfig.size ?? undefined,
          })}
        </div>
      )}
      {typeof childrenEl === 'function'
        ? childrenEl({
            toggle,
            isOpened: opened,
            placement: (dynamicPlacement as ComputedPlacement) ?? undefined,
            setOpened,
          })
        : childrenEl}
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
        (appendTo ? createPortal(PopperCmp, appendTo) : PopperCmp)}
    </>
  );
};

export const Popover = InternalPopover as typeof InternalPopover & {
  Arrow: typeof PopoverArrow;
  Panel: typeof PopoverPanel;
};

Popover.Arrow = PopoverArrow;
Popover.Panel = PopoverPanel;

InternalPopover.displayName = 'Popover';
Popover.Arrow.displayName = 'Popover.Arrow';
Popover.Panel.displayName = 'Popover.Panel';

import * as React from 'react';
import ReactDOM from 'react-dom';
import { useTheme } from 'styled-components';
import { type PopperProps, StrictModifier, usePopper } from 'react-popper';
import { ComputedPlacement } from '@popperjs/core';

import { useOnEventOutside } from '../../hooks';

import { getMarginByPlacement } from './utils';

import {
  PopoverPanel,
  StyledPopoverArrow,
  StyledPopoverArrowProps,
} from './components';

type TriggerProps = (props: {
  ref: any;
  toggle: (ev: React.MouseEvent<HTMLElement>) => void;
  isOpened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => React.ReactNode;

type ChildrenProps = React.ReactNode;

export interface PopoverProps
  extends Omit<
    PopperProps<unknown>,
    'children' | 'innerRef' | 'referenceElement' | 'onFirstUpdate' | 'modifiers'
  > {
  /** DOM element where the popper is appended. It is appended to the body
   * by default. */
  appendTo?: HTMLElement;
  /** The HTML id attribute which is added to the wrapper div of the floating content and should be used as 'aria-controls' value of the trigger. */
  id: React.HTMLAttributes<HTMLDivElement>['id'];
  children?: [TriggerProps, ChildrenProps];
  /** If the floating content is visible/opened by default. */
  isOpened?: boolean;
  arrow?: (arrowProps: StyledPopoverArrowProps) => React.ReactNode;
  modifiers?: StrictModifier[];
}

const defaultAppendToProp =
  typeof window !== 'undefined' ? document.body : null;

export const InternalPopover: React.FC<PopoverProps> = ({
  arrow,
  appendTo = defaultAppendToProp,
  children: [triggerEl, childrenEl],
  id,
  isOpened = false,
  modifiers = [],
  placement = 'auto-start',
  strategy = 'fixed',
}) => {
  const [opened, setOpened] = React.useState(isOpened);

  const [referenceElement, setReferenceElement] = React.useState(null);
  const [popperElement, setPopperElement] = React.useState(null);
  const [arrowRef, setArrowRef] = React.useState<HTMLElement>(null);

  if (arrow) {
    modifiers.push({
      name: 'arrow',
      options: {
        element: arrowRef,
        padding: 10,
      },
    });
  }

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers,
    placement,
    strategy,
  });

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
  });

  const theme = useTheme();
  const zIndex = theme.alias.elevation.zIndex.depth.activated;
  const PopperCmp = opened && referenceElement && (
    <div
      id={id}
      ref={setPopperElement}
      style={{
        zIndex,
        ...getMarginByPlacement(
          attributes?.popper?.['data-popper-placement'] as ComputedPlacement,
        ),
        ...styles.popper,
      }}
      {...attributes.popper}
    >
      {childrenEl}
      {arrow && (
        <div ref={setArrowRef} style={{ zIndex: zIndex + 1, ...styles.arrow }}>
          {arrow({
            placement:
              (attributes?.popper?.[
                'data-popper-placement'
              ] as ComputedPlacement) ?? undefined,
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

import * as React from 'react';
import { type PopperProps, usePopper } from 'react-popper';

import { useOnEventOutside } from '../../hooks';
import ReactDOM from 'react-dom';
import { DropdownPanel } from './components';
import { useTheme } from 'styled-components';

type TriggerProps = (props: {
  ref: any;
  toggle: (ev: React.MouseEvent<HTMLElement>) => void;
  isOpened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => React.ReactNode;

type ChildrenProps = React.ReactNode;

export interface DropdownProps
  extends Omit<
    PopperProps<unknown>,
    'children' | 'innerRef' | 'referenceElement' | 'onFirstUpdate'
  > {
  /** DOM element where the popper is appended. It is appended to the body
   * by default. */
  appendTo?: HTMLElement;
  id: React.HTMLAttributes<HTMLDivElement>['id'];
  children?: [TriggerProps, ChildrenProps];
  isOpened?: boolean;
}

export const InternalDropdown: React.FC<DropdownProps> = ({
  appendTo = defaultAppendToProp,
  children: [triggerEl, childrenEl],
  id,
  isOpened = false,
  modifiers,
  placement = 'auto-start',
  strategy = 'fixed',
}) => {
  const [opened, setOpened] = React.useState(isOpened);

  const [referenceElement, setReferenceElement] = React.useState(null);
  const [popperElement, setPopperElement] = React.useState(null);

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

  const PopperCmp = opened && referenceElement && (
    <div
      id={id}
      ref={setPopperElement}
      style={{
        zIndex: theme.alias.elevation.zIndex.depth.activated,
        ...styles.popper,
      }}
      {...attributes.popper}
    >
      {childrenEl}
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

export const Dropdown = InternalDropdown as typeof InternalDropdown & {
  Panel: typeof DropdownPanel;
};

Dropdown.Panel = DropdownPanel;

InternalDropdown.displayName = 'Dropdown';

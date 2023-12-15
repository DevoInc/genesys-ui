import * as React from 'react';
import { createPortal } from 'react-dom';
import { type PopperProps, usePopper } from 'react-popper';

type TriggerProps = (props: {
  ref: any;
  toggle: (value?: boolean) => void;
}) => React.ReactNode;

type ChidrenProps = React.ReactNode;

interface DropdownProps extends Omit<PopperProps<unknown>, 'children'> {
  isOpened?: boolean;
  // children?: [React.ReactNode, PopperProps<unknown>['children']];
  children?: [TriggerProps, ChidrenProps];
}

export const Dropdown: React.FC<DropdownProps> = ({
  isOpened = false,
  // innerRef,
  modifiers,
  placement,
  strategy = 'fixed',
  // referenceElement
  // onFirstUpdate
  children: [triggerEl, childrenEl],
}) => {
  const [opened, setOpened] = React.useState(isOpened);

  const [referenceElement, setReferenceElement] = React.useState(null);
  const [popperElement, setPopperElement] = React.useState(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers,
    placement,
    strategy,
  });

  const toggle = React.useCallback((value?: boolean) => {
    setOpened((prevState) => value ?? !prevState);
  }, []);

  console.log(referenceElement);

  return (
    <>
      {triggerEl({ ref: setReferenceElement, toggle })}
      {opened && (
        <div
          id="popper-container"
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
        >
          {childrenEl}
        </div>
      )}
    </>
  );
};

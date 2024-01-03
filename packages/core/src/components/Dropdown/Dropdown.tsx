import * as React from 'react';
import { type PopperProps, usePopper } from 'react-popper';

import { useOnEventOutside } from '../../hooks';
import ReactDOM from 'react-dom';
import { Panel } from '../Panel';
import { CSSProp, DefaultTheme } from 'styled-components';

const defaultAppendToProp =
  typeof window !== 'undefined' ? document.body : null;
type TriggerProps = (props: {
  ref: any;
  toggle: (ev: React.MouseEvent<HTMLElement>) => void;
  isOpened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) => React.ReactNode;

type ChidrenProps = React.ReactNode;

export interface DropdownProps
  extends Omit<
    PopperProps<unknown>,
    'children' | 'innerRef' | 'referenceElement' | 'onFirstUpdate'
  > {
  /** DOM element where the popper is appended. It is appended to the body
   * by default. */
  appendTo?: HTMLElement;
  children?: [TriggerProps, ChidrenProps];
  isOpened?: boolean;
  width?: React.CSSProperties['width'];
}

export const Dropdown: React.FC<DropdownProps> = ({
  appendTo = defaultAppendToProp,
  children: [triggerEl, childrenEl],
  isOpened = false,
  modifiers,
  placement,
  strategy = 'fixed',
  width,
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

  const PopperCmp = opened && referenceElement && (
    <Panel.Container
      width={width}
      id={
        referenceElement.getAttribute('aria-controls')
          ? referenceElement.getAttribute('aria-controls')
          : `popper-container-${referenceElement?.id}`
      }
      ref={setPopperElement}
      styles={styles.popper as CSSProp<DefaultTheme>}
      {...attributes.popper}
    >
      {childrenEl}
    </Panel.Container>
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

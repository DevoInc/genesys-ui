import * as React from 'react';
import { usePopper } from 'react-popper';

import { useOnEventOutside } from '../../hooks/useOnEventOutside';
import { Dropdown } from './components/Dropdown';
import {
  KeyboardEventsAction,
  KeyboardEventsMove,
  PopperCoordsProps,
} from './declarations';

export interface DropdownMenuProps {
  /** Label of the menu trigger component. */
  label?: string;
  /** Items for menu: array of objects with items config. */
  items?: Record<string, any>[];
  /** This is the component that triggers the drop-down menu.
   * This component must allow to propagate the accessibility properties
   * (role, aria-hashpopup, ...) for the accessibility to work correctly.
   * Built with forwardRef while the content is passed as children. */
  triggerComponent?: string | React.ComponentType<any>;
  /** Placement of the Popper with respect to the trigger. */
  placement?: PopperCoordsProps;
  /** Allow to open  the drop-down menu when the mouse is over the triggerComponent */
  openOnHover?: boolean;
  /** The menu is extended by default */
  dropdownVisible?: boolean;
  /** Callback with menu status (visible or hidden) */
  triggerDropdownMenuVisibility?: (args) => void;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  label,
  items,
  triggerComponent: TriggerComponent = 'button',
  placement = 'bottom-start',
  openOnHover,
  dropdownVisible,
  triggerDropdownMenuVisibility,
}) => {
  const deepLevel = 0;
  const [referenceElement, setReferenceElement] = React.useState(null);
  const [popperElement, setPopperElement] = React.useState(null);
  const [isVisible, setIsVisible] = React.useState(!!dropdownVisible);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement,
  });
  const [keyboardOpened, setOpenWithKeyboard] = React.useState(false);

  React.useEffect(() => {
    setIsVisible(dropdownVisible);
  }, [dropdownVisible]);

  const changeDropdownMenuVisibility = React.useCallback(
    (visible) => {
      setIsVisible(visible);
      triggerDropdownMenuVisibility?.({ label, isVisible: visible });
    },
    [label, triggerDropdownMenuVisibility],
  );

  const handleClose = (event) => {
    event.stopPropagation();
    const actions: KeyboardEventsAction[] = [' ', 'Enter', 'Escape'];
    if (event.type === 'click' || actions.includes(event.key)) {
      changeDropdownMenuVisibility(false);
      referenceElement.focus();
    }
  };

  // Click Outside - Hook
  useOnEventOutside({
    references: [referenceElement, popperElement],
    handler: () => changeDropdownMenuVisibility(false),
  });

  const handleAction = React.useCallback(
    (visible, isKeyboard) => {
      setOpenWithKeyboard(isKeyboard);
      changeDropdownMenuVisibility(visible);
    },
    [changeDropdownMenuVisibility],
  );

  const onCLick = React.useCallback(
    () => handleAction(!isVisible, false),
    [handleAction, isVisible],
  );

  const keydownHandler = React.useCallback(
    (event) => {
      const { key } = event;
      const enter: KeyboardEventsAction = 'Enter';
      const space: KeyboardEventsAction = ' ';
      const down: KeyboardEventsMove = 'ArrowDown';
      const isKeyboard = true;
      event.preventDefault();
      if (key === enter || key === space) {
        handleAction(!isVisible, isKeyboard);
      } else if (key === down) {
        handleAction(true, isKeyboard);
      }
    },
    [handleAction, isVisible],
  );

  const mouseEnterHandler = React.useCallback(() => {
    if (!openOnHover) return;
    changeDropdownMenuVisibility(true);
  }, [changeDropdownMenuVisibility, openOnHover]);

  return (
    <>
      <TriggerComponent
        ref={setReferenceElement}
        tabIndex={0}
        role="button"
        aria-haspopup="menu"
        aria-expanded={isVisible}
        aria-label={label}
        onClick={onCLick}
        onKeyDown={keydownHandler}
        onMouseEnter={mouseEnterHandler}
      >
        {label}
      </TriggerComponent>
      {isVisible && (
        <div onKeyDown={handleClose} onClick={handleClose}>
          <Dropdown
            keyboardOpened={keyboardOpened}
            deepLevel={deepLevel}
            label={label}
            items={items}
            // onClose={handleClose}
            styles={styles}
            attributes={attributes}
            setPopperElement={setPopperElement}
          />
        </div>
      )}
    </>
  );
};

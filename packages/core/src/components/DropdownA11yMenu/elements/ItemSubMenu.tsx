import * as React from 'react';
import { usePopper } from 'react-popper';

import { MenuItem } from '../components/MenuItem';
import { StyledItemSubmenu, StyledExpandedIcon } from '../styled';

interface ItemSubMenuProps {
  /** Forward item reference to manage the item's accessibility actions */
  forwardedRef: React.Ref<HTMLElement> | null;
  /** Label of the item submenu */
  label: string;
  /** Tooltip on item hover. This is object with the tooltip confg: Label, position, ... */
  tooltip?: { label: string; config: { [key: string]: any } }; // TODO add config types
  /** Items for sub-menu: array of objects with items of the submenu config. */
  subMenu: { [key: string]: any }[];
  /** subMenu component. Dropdown component */
  subMenuComponent: React.ComponentType<any>; // TODO especify component type
  /** If the item is disabled */
  disabled: boolean;
  /** If the item is highlighted */
  highlighted: boolean;
  /** Number of menu/submenu depths. */
  deepLevel: number;
}

export const ItemSubMenu = ({
  forwardedRef,
  label,
  subMenu,
  subMenuComponent: SubMenuComponent,
  disabled,
  highlighted,
  deepLevel,
}: ItemSubMenuProps) => {
  const [referenceElement, setReferenceElement] =
    React.useState<HTMLLabelElement | null>(null);
  const [popperElement, setPopperElement] = React.useState<HTMLElement | null>(
    null
  );
  const [isVisible, setVisible] = React.useState(false);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'right-start',
  });
  const [keyboardOpened, setOpenWithKeyboard] = React.useState(false);

  const action = React.useCallback((visible) => {
    setVisible(visible); //TODO: This fn is getting a wrong-type param
    setOpenWithKeyboard(true);
  }, []);

  const actionOver = React.useCallback(() => {
    setVisible(true);
    setOpenWithKeyboard(false);
  }, []);

  const actionLeave = React.useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <MenuItem
      disabled={disabled}
      highlighted={highlighted}
      role={'menuitem'}
      forwardedRef={forwardedRef}
      aria-haspopup
      aria-expanded={isVisible}
      action={action}
      actionOver={actionOver}
      actionLeave={actionLeave}
    >
      <StyledItemSubmenu ref={setReferenceElement}>
        <span>{label}</span>
        <StyledExpandedIcon iconId={'gi-caret_right_solid'} />
      </StyledItemSubmenu>
      {isVisible && (
        <SubMenuComponent
          keyboardOpened={keyboardOpened}
          deepLevel={deepLevel}
          label={label}
          items={subMenu}
          styles={styles}
          attributes={attributes}
          setPopperElement={setPopperElement}
        />
      )}
    </MenuItem>
  );
};

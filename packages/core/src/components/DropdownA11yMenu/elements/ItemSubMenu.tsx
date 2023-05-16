import * as React from 'react';
import { usePopper } from 'react-popper';

import { MenuItem } from '../components/MenuItem';
import { StyledItemSubmenu, StyledExpandedIcon } from '../styled';
import { Menu } from '../../Menu';
import { MenuItemProps } from '../../Menu/subcomponents';

interface ItemSubMenuProps extends MenuItemProps {
  /** Items for sub-menu: array of objects with items of the submenu config. */
  subMenuConfig: { [key: string]: any }[];
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
  subMenuConfig,
  subMenuComponent: SubMenuComponent,
  disabled,
  highlighted,
  deepLevel,
  state,
  ...restProps
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
    <>
      <Menu.Item
        {...restProps}
        aria-haspopup
        expandable
        forwardedRef={forwardedRef}
        label={label}
        onClick={action}
        onMouseLeave={actionLeave}
        onMouseOver={actionOver}
        ref={setReferenceElement}
        state={isVisible ? 'expanded' : state}
        subMenu={
          isVisible && (
            <SubMenuComponent
              keyboardOpened={keyboardOpened}
              deepLevel={deepLevel}
              label={label}
              items={subMenuConfig}
              styles={styles}
              attributes={attributes}
              setPopperElement={setPopperElement}
            />
          )
        }
      />
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
          <StyledExpandedIcon iconId={'caret_right_solid'} />
        </StyledItemSubmenu>
        {isVisible && (
          <SubMenuComponent
            keyboardOpened={keyboardOpened}
            deepLevel={deepLevel}
            label={label}
            items={subMenuConfig}
            styles={styles}
            attributes={attributes}
            setPopperElement={setPopperElement}
          />
        )}
      </MenuItem>
    </>
  );
};

import * as React from 'react';

import { MenuAccessibility } from './MenuAccessibility';
import { Item, ItemSubMenu, ItemLink, ItemCheckbox } from '../elements';
import { StyledDropdown, StyledSeparator } from '../styled';
import { KeyboardEventsMove, TypesProp } from '../declarations';

const TYPES: { [key: string]: TypesProp } = {
  item: 'item',
  itemSubMenu: 'itemSubMenu',
  itemLink: 'itemLink',
  asSeparator: 'asSeparator',
  itemCheckbox: 'itemCheckbox',
};

const buildItemsMenu = (items: any, listItemsRef: any[], deepLevel: number) => {
  const elements: React.ReactElement[] = [];
  items.forEach((item, index) => {
    if (item.hidden) return;
    let builtComponent: any;
    const disabled =
      typeof item.disabled === 'function' ? item.disabled() : item.disabled;
    const ref = React.createRef<HTMLElement>();
    switch (item.type) {
      case TYPES.item:
        builtComponent = (
          <Item
            action={item.action}
            appendTag={item.appendTag}
            disabled={disabled}
            forwardedRef={ref}
            highlighted={item.highlighted}
            // hidden={item.hidden} // TODO: is it used?
            icon={item.icon}
            key={item.label}
            label={item.label}
            shortcut={item.shortcut}
            tooltip={item.tooltip}
          />
        );
        break;
      case TYPES.itemSubMenu:
        builtComponent = (
          <ItemSubMenu
            deepLevel={deepLevel}
            forwardedRef={ref}
            key={item.label}
            subMenu={item.subMenu}
            subMenuComponent={Dropdown}
            label={item.label}
            disabled={disabled}
            highlighted={item.highlighted}
            // hidden={item.hidden}
          />
        );
        break;
      case TYPES.itemLink:
        builtComponent = (
          <ItemLink
            forwardedRef={ref}
            key={item.label}
            label={item.label}
            tooltip={item.tooltip}
            href={item.href}
            action={item.action}
            target={item.target}
            icon={item.icon}
            shortcut={item.shortcut}
            appendTag={item.appendTag}
            disabled={disabled}
            highlighted={item.highlighted}
            // hidden={item.hidden}
          />
        );
        break;
      case TYPES.asSeparator:
        builtComponent = (
          <StyledSeparator key={`separator_${deepLevel}_${index}`} />
        );
        break;
      case TYPES.itemCheckbox:
        builtComponent = (
          <ItemCheckbox
            forwardedRef={ref}
            key={item.label}
            tooltip={item.tooltip}
            checked={item.checked}
            label={item.label}
            shortcut={item.shortcut}
            appendTag={item.appendTag}
            onChange={item.onChange}
            disabled={disabled}
            highlighted={item.highlighted}
            // hidden={item.hidden}
          />
        );
        break;
    }
    elements.push(builtComponent);
    if (item.type !== TYPES.asSeparator) listItemsRef.push(ref);
  });
  return elements;
};

interface DropdownProps {
  /** Label of the menu trigger component. */
  label?: string;
  /** Items for menu: array of objects with item config. */
  items?: { [key: string]: any }[];
  /** This prop defines the Popper styles. */
  styles: { [key: string]: any }; // TODO: is this used?
  /** This prop defines the Popper attributes. */
  attributes: { [key: string]: any }; // TODO: is this used?
  /** Function to set the Popper element reference. */
  setPopperElement?: any;
  /** Number of menu/submenu depths. */
  deepLevel?: number;
  /** This property defines whether or not to open the menu with the keyboard to manage accessibility actions. */
  keyboardOpened?: boolean;
  /** Customizable drop-down menu style (max-width, ...) */
  customStyled?: React.CSSProperties;
}

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  items,
  styles,
  attributes,
  setPopperElement,
  deepLevel = 0,
  keyboardOpened,
  customStyled,
}) => {
  const listItemsRef: any = [];
  const previousRef = React.useRef<any>();
  const [activeItem, setActiveItem] = React.useState(0);
  deepLevel = deepLevel + 1;
  React.useLayoutEffect(() => {
    previousRef.current = document.activeElement;
  }, []);
  React.useLayoutEffect(() => {
    if (keyboardOpened) listItemsRef[activeItem]?.current?.focus();
    return () => {
      if (keyboardOpened) previousRef.current.focus();
    };
  });

  const updateActiveItem = React.useCallback(
    (key) => {
      const up: KeyboardEventsMove = 'ArrowUp';
      const down: KeyboardEventsMove = 'ArrowDown';

      if (key === up && activeItem - 1 >= 0) {
        setActiveItem(activeItem - 1);
      }
      if (key === down && activeItem + 1 < listItemsRef.length) {
        setActiveItem(activeItem + 1);
      }
    },
    [activeItem, listItemsRef.length]
  );

  return (
    <MenuAccessibility
      role={'menu'}
      aria-label={`${label}_submenu_${deepLevel}`}
      action={updateActiveItem}
    >
      <StyledDropdown
        zIndex={deepLevel}
        ref={setPopperElement}
        style={styles.popper}
        role={'group'}
        {...attributes.popper}
        {...customStyled}
      >
        {buildItemsMenu(items, listItemsRef, deepLevel)}
      </StyledDropdown>
    </MenuAccessibility>
  );
};

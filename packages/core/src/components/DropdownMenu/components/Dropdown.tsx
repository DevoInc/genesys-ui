import * as React from 'react';

import { MenuAccessibility } from './MenuAccessibility';
import { Item, ItemSubMenu, ItemSelectable } from '../elements';
import { KeyboardEventsMove, TypesProp } from '../declarations';
import { Menu } from '../../Menu';
import { BoxProps } from '../../Box';
import { DropdownMenuContainer } from './DropdownMenuContainer';
import { MenuItemProps } from '../../Menu/subcomponents';

const TYPES: { [key: string]: TypesProp } = {
  item: 'item',
  itemSubMenu: 'itemSubMenu',
  itemLink: 'itemLink',
  asSeparator: 'asSeparator',
  itemSelectable: 'itemSelectable',
};

const buildItemsMenu = (
  items: Record<string, any>[],
  listItemsRef: React.RefObject<HTMLElement>[],
  deepLevel: number,
) => {
  const elements: React.ReactElement[] = [];
  const checkLeftSpace = (dataItem) =>
    dataItem.checked ||
    dataItem.icon ||
    (dataItem.icon && !dataItem.prependContent);
  const leftSpaced =
    items.length > 0 && items.filter(checkLeftSpace).length > 0;
  items.forEach((item, index) => {
    if (item.hidden) return;
    let builtComponent: React.ReactElement<MenuItemProps> = (
      <Item {...item} hasExtraLeftSpace={leftSpaced} />
    );
    const ref = React.createRef<HTMLElement>();

    if (item.type === TYPES.item)
      builtComponent = <Item {...item} hasExtraLeftSpace={leftSpaced} />;
    if (item.type === TYPES.itemSubMenu)
      builtComponent = (
        <ItemSubMenu
          {...item}
          deepLevel={deepLevel}
          // forwardedRef={ref}
          hasExtraLeftSpace={leftSpaced}
          key={item.label}
          subMenuConfig={item.subMenu}
          subMenuComponent={Dropdown}
          // hidden={item.hidden}
        />
      );
    if (item.type === TYPES.asSeparator)
      builtComponent = (
        <Menu.Separator key={`separator_${deepLevel}_${index}`} />
      );
    if (item.type === TYPES.itemSelectable)
      builtComponent = (
        <ItemSelectable
          {...item}
          // forwardedRef={ref}
          key={item.label}
          hasExtraLeftSpace={leftSpaced}
        />
      );

    elements.push(builtComponent);
    if (item.type !== TYPES.asSeparator) listItemsRef.push(ref);
  });
  return elements;
};

interface DropdownProps extends BoxProps {
  /** Label of the menu trigger component. */
  label?: string;
  /** Items for menu: array of objects with item config. */
  items?: Record<string, any>[];
  /** This prop defines the Popper styles. */
  styles: Record<string, any>;
  /** This prop defines the Popper attributes. */
  attributes: Record<string, any>;
  /** Function to set the Popper element reference. */
  setPopperElement?: (ref: React.RefObject<HTMLElement>) => void;
  /** Number of menu/submenu depths. */
  deepLevel?: number;
  /** This property defines whether or not to open the menu with the keyboard to manage accessibility actions. */
  keyboardOpened?: boolean;
}

export const Dropdown: React.FC<DropdownProps> = ({
  label,
  items,
  styles,
  attributes,
  setPopperElement,
  deepLevel = 0,
  keyboardOpened,
  ...boxProps
}) => {
  const listItemsRef: React.RefObject<HTMLElement>[] = [];
  const previousRef = React.useRef<HTMLElement>();
  const [activeItem, setActiveItem] = React.useState(0);
  deepLevel = deepLevel + 1;
  React.useLayoutEffect(() => {
    previousRef.current = document.activeElement as HTMLElement;
  }, []);
  React.useLayoutEffect(() => {
    if (keyboardOpened) listItemsRef[activeItem]?.current?.focus();
    return () => {
      if (keyboardOpened) previousRef.current?.focus();
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
    [activeItem, listItemsRef.length],
  );

  return (
    <MenuAccessibility
      role={'menu'}
      aria-label={`${label} submenu ${deepLevel}`}
      action={updateActiveItem}
    >
      <DropdownMenuContainer
        zIndex={deepLevel}
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
        {...boxProps}
      >
        {buildItemsMenu(items, listItemsRef, deepLevel)}
      </DropdownMenuContainer>
    </MenuAccessibility>
  );
};

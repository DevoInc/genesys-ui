import * as React from 'react';

import { MenuItemObj, MenuItemsObj } from '../declarations';
import { StyledMenuItemProps, StyledMenuList } from '../styled';
import { MenuItem, MenuItemProps } from './MenuItem';

const getNewData = (
  model: MenuItemsObj,
  idx: number,
  selected: boolean
): MenuItemsObj => {
  return model.map((x, idx2) =>
    idx2 === idx ? { ...x, selected: selected } : x
  );
};

const checkLeftSpace = (dataItem: MenuItemObj): boolean =>
  dataItem.selectable || Boolean(dataItem.icon);

export interface MenuListProps extends StyledMenuItemProps, MenuItemProps {
  /** If there is extra space to the left of menu items. */
  leftSpaced?: boolean;
  /** Data for menu: array of objects with nav item and link config.*/
  data?: MenuItemsObj;
}

export const MenuList: React.FC<MenuListProps> = ({
  boxed,
  data,
  expand,
  expandIconFade,
  leftSpaced,
  menuLinkCmp,
  menuLinkContent,
  onChange,
  separators,
  size,
  titleLinkStyle,
}) => (
  <StyledMenuList>
    {data &&
      data.length > 0 &&
      data.map((item, idx) => (
        <MenuItem
          activated={item.activated}
          appendContent={item.appendContent}
          boxed={boxed}
          description={item.description}
          disabled={item.disabled}
          expand={expand}
          expandable={item.expandable || item.subMenu}
          expanded={item.expanded}
          expandIconFade={expandIconFade}
          extraContent={item.extraContent}
          focused={item.focused}
          heading={item.heading}
          highlighted={item.highlighted}
          hovered={item.hovered}
          href={item.href}
          icon={item.icon}
          isHeading={item.isHeading}
          key={idx}
          leftSpaced={
            leftSpaced ||
            (data && data.length > 0 && data.filter(checkLeftSpace).length > 0)
          }
          mainContent={item.mainContent}
          menuLinkCmp={menuLinkCmp}
          menuLinkContent={menuLinkContent}
          meta={item.meta}
          onChange={onChange}
          onClick={item.onClick}
          onFocus={item.onFocus}
          onSelect={(selected) =>
            onChange && onChange(getNewData(data, idx, selected))
          }
          prependContent={item.prependContent}
          pressed={item.pressed}
          selectable={item.selectable}
          selected={item.selected}
          asSeparator={item.asSeparator}
          separators={separators}
          shortcut={item.shortcut}
          size={size}
          status={item.status}
          target={item.target}
          text={item.text}
          title={item.title}
          titleLinkStyle={titleLinkStyle}
          tooltip={item.tooltip}
        />
      ))}
  </StyledMenuList>
);

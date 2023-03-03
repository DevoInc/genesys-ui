import * as React from 'react';

import { MenuLink } from './MenuLink';
import {
  StyledMenuItem,
  StyledMenuItemAsSeparator,
  StyledMenuItemAsHeading,
  StyledMenuItemProps,
  StyledMenuItemAsHeadingProps,
  StyledMenuItemAsSeparatorProps,
} from '../styled';
import { Directions, MenuItemSize, MenuItemsObj } from '../declarations';
import { GlobalStatus } from '../../../declarations';

export interface MenuItemProps
  extends StyledMenuItemProps,
    StyledMenuItemAsHeadingProps,
    StyledMenuItemAsSeparatorProps {
  /** function onChange of the menu. */
  onChange?: (data: MenuItemsObj) => void;
  /** The component/s used for menu link */
  menuLinkCmp?: React.ElementType; //TODO: review this type
  /** The component/s used for menu link (children) */
  menuLinkContent?: React.ElementType; // TODO: review this type
  /** If the title has link appearance. */
  titleLinkStyle?: boolean;
  /** If there are separators between the menu items. */
  boxed?: boolean;
  /** If the menu items are boxed.*/
  separators?: boolean;
  /** If the menu items expand other content and to where.*/
  expand?: Directions;
  /** If the item is used as a heading of a group of items.*/
  isHeading?: boolean;
  heading?: string;
  /** Component to be used for main content of the box between
   * prependContent and appendContent.*/
  mainContent?: React.ReactNode; //TODO: review this type
  href?: string;
  target?: '_blank' | '_self';
  onClick?: () => void;
  /** Function to be called when the box is selected.*/
  onSelect?: (selected: boolean) => void;
  /** Function to be called when the box is focused.*/
  onFocus?: () => void;
  /** If there is an extra space to the left of the box. */
  leftSpaced?: boolean;
  /** Size to define padding, line-height, font-size... etc. of
   * the elements.*/
  size?: MenuItemSize;
  /** It defines the status color schema for the box */
  status?: GlobalStatus;
  /** Content to be included at the right of the box.*/
  appendContent?: React.ReactNode; //TODO: Review this type
  /** Content to be included at the left of the box.*/
  prependContent?: React.ReactNode; //TODO: Review this type
  /** Icon for the box.*/
  icon?: string;
  /** Title on heading of the box.*/
  title?: string;
  /** OLD - Title on heading of the box.*/
  text?: string;
  /** Extra Info on heading of the box.*/
  meta?: string;
  /** Description text block of the box.*/
  description?: string;
  /** Shortcut before append content and expand icon.*/
  shortcut?: string;
  /** If the item is used as a separator (an html <hr>).*/
  asSeparator?: boolean;
  /** Content block below the title and description block.*/
  extraContent?: React.ReactNode; //TODO: Review this type
  /** Tooltip on box hover.*/
  tooltip?: string;
  /** If the link expands other content.*/
  expandable?: boolean;
  /** If the expand icon is visible only on hover/focus/active state.*/
  expandIconFade?: boolean;
  /** If the box is expanding other content.*/
  expanded?: boolean;
  /** If the box is selectable: behavior as checkbox.*/
  selectable?: boolean;
  disabled?: boolean;
  hovered?: boolean;
  focused?: boolean;
  pressed?: boolean;
  highlighted?: boolean;
  selected?: boolean;
  activated?: boolean;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  activated,
  appendContent,
  boxed = false,
  description,
  disabled,
  expand,
  expandable,
  expanded,
  expandIconFade,
  extraContent,
  focused,
  heading,
  highlighted,
  hovered,
  href,
  icon,
  isHeading,
  leftSpaced,
  mainContent,
  menuLinkContent,
  meta,
  onChange,
  onClick,
  onFocus,
  onSelect,
  prependContent,
  pressed,
  selectable,
  selected,
  asSeparator,
  separators = false,
  shortcut,
  size,
  status,
  target,
  text,
  title,
  titleLinkStyle,
  tooltip,
  menuLinkCmp = MenuLink,
}) => {
  const MenuLinkCmp = menuLinkCmp;
  return (
    <StyledMenuItem
      boxed={boxed}
      separators={separators}
      size={size}
      aria-hidden={asSeparator}
    >
      {asSeparator || isHeading ? (
        <React.Fragment>
          {isHeading && heading && (
            <StyledMenuItemAsHeading
              size={size}
              asSeparator={asSeparator}
              boxed={boxed}
            >
              {heading}
            </StyledMenuItemAsHeading>
          )}
          {asSeparator && (
            <StyledMenuItemAsSeparator
              separators={separators}
              isHeading={isHeading}
            />
          )}
        </React.Fragment>
      ) : (
        <MenuLinkCmp
          href={href}
          target={target}
          onClick={onClick}
          onChange={onChange}
          onSelect={onSelect}
          onFocus={onFocus}
          size={size}
          status={status}
          mainContent={mainContent}
          appendContent={appendContent}
          prependContent={prependContent}
          icon={icon}
          title={title ? title : text}
          meta={meta}
          description={description}
          shortcut={shortcut}
          extraContent={extraContent}
          tooltip={tooltip}
          leftSpaced={leftSpaced}
          titleQuiet={!titleLinkStyle}
          boxed={boxed}
          expand={expandable && expand}
          expandIconFade={expandIconFade}
          selectable={selectable}
          expanded={expanded}
          disabled={disabled}
          hovered={hovered}
          focused={focused}
          pressed={pressed}
          highlighted={highlighted}
          selected={selected}
          activated={activated}
        >
          {menuLinkContent}
        </MenuLinkCmp>
      )}
    </StyledMenuItem>
  );
};

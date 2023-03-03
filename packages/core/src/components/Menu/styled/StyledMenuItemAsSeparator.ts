import styled from 'styled-components';
import { getMenuSizes } from './utils/menuUtils';
import { MenuItemSize } from '../declarations';

export interface StyledMenuItemAsSeparatorProps {
  /** Size to define padding, line-height, font-size... etc. of
   * the elements.*/
  size?: MenuItemSize;
  /** If the item is used as a heading of a group of items.*/
  isHeading?: boolean;
  /** If the menu items are boxed.*/
  separators?: boolean;
}

export const StyledMenuItemAsSeparator = styled.hr<StyledMenuItemAsSeparatorProps>`
  --margin: ${({ size }) => getMenuSizes(size).marginSeparator};
  margin: var(--margin) 0;
  margin-top: ${({ isHeading }) => isHeading && '0'};
  border-style: solid;
  border-width: 0 0 1px 0;
  border-color: ${({ separators, theme }) =>
    separators
      ? 'transparent'
      : theme.tokens.alias.color.border.separator.base.base};
`;

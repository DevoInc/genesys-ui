import styled from 'styled-components';

import { getMenuSizes } from './utils/menuUtils';
import { MenuItemSize } from '../declarations';

export interface StyledMenuItemProps {
  /** If the menu items are boxed.*/
  separators?: boolean;
  /** If the box is rendered with more padding, border, box-shadow... etc.*/
  boxed?: boolean;
  /** Size to define padding, line-height, font-size... etc. of
   * the elements.*/
  size?: MenuItemSize;
}

export const StyledMenuItem = styled.li<StyledMenuItemProps>`
  list-style: none;
  & + & {
    border-top: ${({ boxed, separators, theme }) =>
      !boxed &&
      separators &&
      '1px solid' + theme.tokens.alias.color.border.separator.base.base};
    margin-top: ${({ boxed, size }) =>
      boxed && getMenuSizes(size).itemBoxedSpace};
  }
`;

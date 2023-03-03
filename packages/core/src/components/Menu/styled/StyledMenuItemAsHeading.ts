import styled, { css } from 'styled-components';

import { getMenuSizes } from './utils/menuUtils';
import { typoColorMixin, typoMixin } from '../../../styled/mixins/baseMixins';
import { MenuItemSize } from '../declarations';

export interface StyledMenuItemAsHeadingProps {
  /** Size to define padding, line-height, font-size... etc. of
   * the elements.*/
  size?: MenuItemSize;
  /** If the item is used as a separator (an html <hr>).*/
  asSeparator?: boolean;
  /** If there are separators between the menu items. */
  boxed?: boolean;
}

export const StyledMenuItemAsHeading = styled.div<StyledMenuItemAsHeadingProps>`
  ${({ boxed, asSeparator, size, theme }) => css`
    // text styles
    ${typoMixin({
      size,
      theme,
      variant: 'overline',
    })};

    // text color styles
    ${typoColorMixin({
      theme,
      variant: 'body',
    })};

    --margin-t: ${getMenuSizes(size).itemHeadingSpaceTop};
    --margin-b: ${getMenuSizes(size).marginSeparator};
    --padding-left: ${getMenuSizes(size).itemHeadingPaddingLeft};
    padding-left: ${boxed ? '0' : 'var(--padding-left)'};
    padding-bottom: ${asSeparator && 'calc(var(--margin-b) / 2)'};
    margin-top: var(--margin-t);
    margin-bottom: ${asSeparator ? '0' : 'var(--margin-b)'};
  `};
`;

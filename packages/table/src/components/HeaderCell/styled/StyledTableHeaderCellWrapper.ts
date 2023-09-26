import styled, { css, DefaultTheme } from 'styled-components';
import { elevationMixin } from '@devoinc/genesys-ui';
import { getSizes } from '../../utils';

interface StyledTableHeaderCellWrapperProps {
  theme: DefaultTheme;
  isScrolled?: boolean;
  widthProp: number;
}

export const StyledTableHeaderCellWrapper = styled.th<StyledTableHeaderCellWrapperProps>`
  ${({ isScrolled, theme, widthProp }) => {
    const tokens = theme.cmp.table;
    const aliasTokens = theme.alias;
    const borderRadius = getSizes(tokens).row.br + 'px';
    return css`
      ${isScrolled && elevationMixin(theme)('stickyBottom')};
      position: ${isScrolled ? 'sticky' : 'relative'};
      top: 0;
      vertical-align: middle;
      box-sizing: border-box;
      width: ${widthProp && widthProp + 'px'};
      color: ${aliasTokens.color.text.heading.base};

      // border radius in head top
      &:first-child {
        border-radius: ${isScrolled
          ? `${borderRadius} 0 0 0`
          : `${borderRadius} 0 0 ${borderRadius}`};
      }
      &:last-child {
        border-radius: ${!isScrolled && `0 ${borderRadius} ${borderRadius} 0`};
      }

      // resizable columns
      ::-webkit-resizer {
        appearance: none;
      }
      padding-top: 0;
      padding-bottom: 0;
      // to avoid include '...' ellipsis in complex type cells
      &::after {
        content: none;
      }
    `;
  }}
`;

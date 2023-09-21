import styled, { css, DefaultTheme } from 'styled-components';
import { elevationMixin } from '@devoinc/genesys-ui';
import { getSizes } from '../../utils';

interface StyledTableHeadCellProps {
  theme: DefaultTheme;
  isVirtual?: boolean;
  isScrolled?: boolean;
  widthProp: number;
}

export const StyledTableHeadCell = styled.th<StyledTableHeadCellProps>`
  ${({ isVirtual, isScrolled, theme, widthProp }) => {
    const tokens = theme.cmp.table;
    const aliasTokens = theme.alias;
    const borderRadius = getSizes(tokens).row.br + 'px';
    return css`
      ${!isVirtual && isScrolled && elevationMixin(theme)('stickyBottom')};
      position: ${!isVirtual && isScrolled ? 'sticky' : 'relative'};
      top: ${!isVirtual && '0'};
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
    `;
  }}
`;

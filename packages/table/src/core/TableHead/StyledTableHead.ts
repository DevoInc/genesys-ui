import styled, { css } from 'styled-components';
import { elevationMixin } from '@devoinc/genesys-ui';

interface StyledTableHeadProps {
  scrolled?: boolean;
  isVirtual?: boolean;
}

export const StyledTableHead = styled.thead<StyledTableHeadProps>`
  top: 0;
  vertical-align: middle;
  width: 100%;
  display: inline-block;
  position: sticky;

  ${({ scrolled = true, theme }) => {
    return css`
      ${scrolled && elevationMixin(theme)('stickyBottom')};
      position: ${scrolled ? 'sticky' : 'relative'};
    `;
  }}

  ${({ theme }) => {
    return css`
      z-index: ${theme.cmp.table.head.elevation.zIndex};
      background-color: ${theme.cmp.table.head.color.background};
    `;
  }}
`;

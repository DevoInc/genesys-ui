import styled, { css } from 'styled-components';
import { elevationMixin } from '@devoinc/genesys-ui';

interface StyledTableHeadProps {
  scrolled?: boolean;
  isVirtual?: boolean;
}

export const StyledTableHead = styled.thead<StyledTableHeadProps>`
  ${({ scrolled, theme }) => {
    return css`
      ${scrolled && elevationMixin(theme)('stickyBottom')})};
      position: ${scrolled ? 'sticky' : 'relative'};
    `;
  }}

  top: 0;

  ${({ theme }) => {
    return css`
      z-index: ${theme.cmp.table.head.elevation.zIndex};
      background-color: ${theme.cmp.table.head.color.background};
    `;
  }}
`;

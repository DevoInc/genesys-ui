import styled, { css } from 'styled-components';
import { elevationMixin } from '@devoinc/genesys-ui';

interface StyledTableHeadProps {
  scrolled?: boolean;
  width?: React.CSSProperties['width'];
}

export const StyledTableHead = styled.thead<StyledTableHeadProps>`
  top: 0;
  width: 100%;
  display: inline-block;

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

  ${({ width }) => css`
    width: ${width};
  `}
`;

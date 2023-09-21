import styled, { css } from 'styled-components';
import { StyledTableCellWrapper } from '../../Cell/StyledTableCellWrapper';

export const StyledTableHeadCellWrapper = styled(StyledTableCellWrapper)`
  ${({ theme }) => {
    return css`
      position: relative;
      font-weight: bold;
      color: ${theme.alias.color.text.heading.base};
      padding-top: 0;
      padding-bottom: 0;
      // to avoid include '...' ellipsis in complex type cells
      &::after {
        content: none;
      }
    `;
  }}
`;

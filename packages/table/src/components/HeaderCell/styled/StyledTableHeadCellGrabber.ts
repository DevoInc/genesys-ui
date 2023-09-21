import styled, { css, DefaultTheme } from 'styled-components';
import { StyledTableHeadCellSeparator } from '@devoinc/genesys-ui-table';
import { elevationMixin } from '@devoinc/genesys-ui';

interface StyledTableHeadCellGrabberProps {
  theme: DefaultTheme;
  tableHeight: number;
}

export const StyledTableHeadCellGrabber = styled(
  StyledTableHeadCellSeparator,
)<StyledTableHeadCellGrabberProps>`
  ${({ theme }) => {
    const cmpTokens = theme.cmp.table.headCellGrabber;
    const transitionDuration = cmpTokens.mutation.transitionDuration;
    return css`
      ${elevationMixin(theme)('overlay')};
      cursor: col-resize;
      transition:
        background-color ${transitionDuration} ease,
        height ${transitionDuration} ease;

      &:hover,
      &:active {
        background-color: ${cmpTokens.color.background.hovered};
        height: auto;

        &::after {
          top: 0;
          margin-top: 0;
          height: 100%;
          background-color: ${cmpTokens.color.background.after};
        }
      }
    `;
  }}
`;

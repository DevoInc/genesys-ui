import styled, { css, DefaultTheme } from 'styled-components';
import { elevationMixin } from '@devoinc/genesys-ui';
import { StyledTableHeadCellSeparator } from './StyledTableHeadCellSeparator';

interface StyledTableHeadCellGrabberProps {
  theme: DefaultTheme;
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

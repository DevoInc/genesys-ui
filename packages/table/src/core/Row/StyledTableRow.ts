import styled, { css } from 'styled-components';
import { pseudoElementMixin } from '@devoinc/genesys-ui';
import { getSizes } from '../utils';

interface StyledTableRowProps {
  height?: React.CSSProperties['height'];
}

export const StyledTableRow = styled.tr<StyledTableRowProps>`
  ${({ theme }) => {
    const tableTokens = theme.cmp.table;
    const cmpTokens = tableTokens.row;
    const transitionDuration = cmpTokens.mutation.transitionDuration;
    return css`
      @keyframes modifiedBlink {
        0% {
          background-color: ${cmpTokens.color.background.modifiedBlink};
        }
        100% {
          background-color: ${cmpTokens.color.background.even.highlighted};
        }
      }
      transition: background-color ease ${transitionDuration.bgColor};
    `;
  }}

  ${({ height, theme }) => {
    const tableTokens = theme.cmp.table;
    const cmpTokens = tableTokens.row;
    const borderRadius = getSizes(tableTokens).row.br;
    return css`
      border: none;
      border-radius: ${borderRadius};
      height: ${height + 'px'};
      background-color: ${cmpTokens.color.background.odd.base};

      // border bottom with pseudo element to avoid border radius effect
      &::after {
        ${pseudoElementMixin(null)};
        bottom: 0;
        left: ${borderRadius};
        right: ${borderRadius};
        height: ${cmpTokens.shape.borderSize.after};
        background-color: ${cmpTokens.color.background.after};
        pointer-events: none;
      }
    `;
  }}
`;

import styled, { css } from 'styled-components';
import { pseudoElementMixin } from '@devoinc/genesys-ui';
import { getSizes } from '../utils';

interface StyledTableRowProps {
  heightProp?: number;
}

export const StyledTableRow = styled.tr<StyledTableRowProps>`
  ${({ heightProp, theme }) => {
    const tableTokens = theme.cmp.table;
    const cmpTokens = tableTokens.row;
    const transitionDuration = cmpTokens.mutation.transitionDuration;
    const borderRadius = getSizes(tableTokens).row.br + 'px';
    return css`
      display: flex;
      @keyframes modifiedBlink {
        0% {
          background-color: ${cmpTokens.color.background.modifiedBlink};
        }
        100% {
          background-color: ${cmpTokens.color.background.even.highlighted};
        }
      }
      transition: background-color ease ${transitionDuration.bgColor};
      border: none;
      border-radius: ${borderRadius};
      height: ${heightProp + 'px'};
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

import styled, { css, CSSProp } from 'styled-components';

import { pseudoElementOverlayMixin } from '@devoinc/genesys-ui';

import { cellMixin } from '../helpers';

interface StyledCellProps {
  // TODO: interface only for satisfy the type error with TS and inherit CSSProp
  css: CSSProp;
  $isHighlighted: boolean;
}

export const StyledCell = styled.td<StyledCellProps>`
  &::after {
    ${pseudoElementOverlayMixin()};
    z-index: -1;
    background-color: transparent;
    transition: none;
  }

  ${({ theme }) => cellMixin({ theme })};

  ${({ $isHighlighted, theme }) => {
    return (
      $isHighlighted &&
      css`
        background-color: ${theme.cmp.table.cell.color.background.backdrop
          .hovered.base};
      `
    );
  }}
`;

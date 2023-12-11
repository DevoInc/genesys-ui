import styled, { css } from 'styled-components';

import { TableVisualOptions } from '../../declarations';
import { StyledTableProps } from '../Table/StyledTable';

import { cellMixin } from '../helpers';
import { pseudoElementOverlayMixin } from '@devoinc/genesys-ui';
import { getTableZIndexMap } from '../utils';

interface StyledTableCellProps
  extends Pick<TableVisualOptions, 'highlightColumnsOnHover'>,
    Pick<StyledTableProps, '$height' | '$width'> {
  offsetX?: number;
  highlightedColumnHeight?: number;
}

export const StyledTableCell = styled.td.attrs(
  ({ $width, $height, offsetX }: StyledTableCellProps) => ({
    style: {
      width: $width,
      height: $height,
      left: `${offsetX}px`,
    },
  }),
)<StyledTableCellProps>`
  ${({ highlightColumnsOnHover, highlightedColumnHeight = 9999, theme }) => {
    const tokens = theme.cmp.table.cell;
    return css`
      ${cellMixin({ theme })};
      ${highlightColumnsOnHover &&
      css`
        &:after {
          ${pseudoElementOverlayMixin()};
          height: ${`calc(${highlightedColumnHeight}px * 2)`};
          z-index: -1;
          background-color: transparent;
          transition: none;
        }

        &:hover::after {
          top: ${`calc(${highlightedColumnHeight}px * -1)`};
          background-color: ${tokens.color.background.backdrop.hovered.base};
          z-index: ${getTableZIndexMap(theme).columnHighlight};
          pointer-events: none;
        }
      `};
    `;
  }}
`;

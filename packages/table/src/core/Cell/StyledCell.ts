import styled, { css } from 'styled-components';

import { Density } from '../../declarations';

import { cellMixin } from '../helpers';
import { pseudoElementOverlayMixin } from '@devoinc/genesys-ui';
import { getTableZIndexMap } from '../utils';

type StyledCellProps = {
  wrapperHeight?: number;
  density?: Density;
  highlightColumnsOnHover?: boolean;
  offsetX: number;
  $width: number;
  $height: number;
};

export const StyledCell = styled.td.attrs(
  ({ $width, $height, offsetX }: StyledCellProps) => ({
    style: {
      width: `${$width}px`,
      height: `${$height}px`,
      left: `${offsetX}px`,
    },
  }),
)<StyledCellProps>`
  &:after {
    ${pseudoElementOverlayMixin()};
    z-index: -1;
    background-color: transparent;
    transition: none;
  }

  ${({ theme }) => cellMixin({ theme })};

  ${({ highlightColumnsOnHover, wrapperHeight = 9999, theme, density }) => {
    const tokens = theme.cmp.table.cell;
    return highlightColumnsOnHover
      ? css`
          &:focus,
          &:has(*:focus),
          &:has([aria-expanded='true']),
          &:hover {
            &::after {
              top: ${`calc((${wrapperHeight}px - ${theme.cmp.table.head.size.height[density]}) * -1)`};
              height: ${`calc(${wrapperHeight}px * 2)`};
              background-color: ${tokens.color.background.backdrop.hovered
                .base};
              z-index: ${getTableZIndexMap(theme).columnHighlight};
              pointer-events: none;
            }
          }
        `
      : '';
  }}
`;

import styled, { css, CSSProp } from 'styled-components';

import { pseudoElementOverlayMixin } from '@devoinc/genesys-ui';

import type { TDensity } from '../../declarations';

import { cellMixin } from '../helpers';
import { getTableZIndexMap } from '../utils';

interface StyledCellProps {
  $wrapperHeight?: number;
  $density?: TDensity;
  $highlightColumnsOnHover?: boolean;
  $offsetX: number;
  $width: number;
  $height: number;
  // TODO: interface only for satisfy the type error with TS and inherit CSSProp
  css: CSSProp;
}

export const StyledCell = styled.td.attrs(
  ({ $width, $height, $offsetX }: StyledCellProps) => ({
    style: {
      width: `${$width}px`,
      height: `${$height}px`,
      left: `${$offsetX}px`,
    },
  }),
)<StyledCellProps>`
  &::after {
    ${pseudoElementOverlayMixin()};
    z-index: -1;
    background-color: transparent;
    transition: none;
  }

  ${({ theme }) => cellMixin({ theme })};

  ${({ $highlightColumnsOnHover, $wrapperHeight = 9999, theme, $density }) => {
    const tokens = theme.cmp.table.cell;
    return $highlightColumnsOnHover
      ? css`
          &:focus,
          &:has(*:focus),
          &:has([aria-expanded='true']),
          &:hover {
            &::after {
              top: ${`calc((${$wrapperHeight}px - ${theme.cmp.table.head.size.height[$density]}) * -1)`};
              height: ${`calc(${$wrapperHeight}px * 2)`};
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

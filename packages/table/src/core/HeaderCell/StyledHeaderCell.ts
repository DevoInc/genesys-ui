import * as React from 'react';
import styled, { css } from 'styled-components';

import { getSpacingPropCss } from '@devoinc/genesys-ui';

import { CELL_ALIGN_MAP } from '../../constants';
import { TDensity } from '../../declarations';
import type { StyledCellWrapperProps } from '../Cell/StyledCellWrapper';
import { cellMixin } from '../helpers';

interface StyledHeaderCellProps
  extends Pick<StyledCellWrapperProps, '$horAlign'> {
  $width: React.CSSProperties['width'];
  $offsetX?: number;
  $density?: TDensity;
  sortable?: boolean;
  isSelected?: boolean;
}

export const StyledHeaderCell = styled.th<StyledHeaderCellProps>`
  left: 0;
  height: 100%;
  ${({ theme }) => cellMixin({ theme })}
  ${({ theme, isSelected }) =>
    isSelected &&
    css`
      background-color: ${theme.cmp.table.cell.color.background.backdrop.hovered
        .base};
    `};
  justify-content: ${({ $horAlign }) =>
    $horAlign
      ? (CELL_ALIGN_MAP[$horAlign] as React.CSSProperties['justifyContent'])
      : 'space-between'};
  gap: ${({ theme }) => getSpacingPropCss(theme)('cmp-xs')};
  transform: ${({ $offsetX }) => `translateX(${$offsetX}px)`};
  ${({ $width }) => $width && `width: ${$width};`}
  padding: ${({ theme, $density }) =>
    `${theme.cmp.table.cell.space.padding.ver[$density].base} ${theme.cmp.table.cell.space.padding.hor[$density]}`};
  cursor: ${({ sortable }) => sortable && 'pointer'};
`;

import * as React from 'react';
import styled, { css } from 'styled-components';

import { getSpacingPropCss } from '@devoinc/genesys-ui';

import { CELL_ALIGN_MAP } from '../../constants';
import { TDensity } from '../../declarations';
import type { StyledCellWrapperProps } from '../../wrapper/CellWrapper/StyledCellWrapper';
import { cellMixin } from '../helpers';

interface StyledHeaderCellProps
  extends Pick<StyledCellWrapperProps, '$horAlign'> {
  $width: React.CSSProperties['width'];
  $offsetX?: number;
  $density?: TDensity;
  sortable?: boolean;
}

export const StyledHeaderCell = styled.th<StyledHeaderCellProps>`
  left: 0;
  height: 100%;
  ${({ theme }) => cellMixin({ theme })}
  justify-content: ${({ $horAlign }) =>
    $horAlign
      ? (CELL_ALIGN_MAP[$horAlign] as React.CSSProperties['justifyContent'])
      : 'space-between'};
  gap: ${({ theme }) => getSpacingPropCss(theme)('cmp-xs')};
  transform: ${({ $offsetX }) => `translateX(${$offsetX}px)`};
  ${({ $width }) => $width && `width: ${$width};`}
  padding: ${({ theme, $density }) =>
    `0 ${theme.cmp.table.cell.space.padding.hor[$density]}`};
  cursor: ${({ sortable }) => sortable && 'pointer'};

  &:focus-visible {
    box-shadow: ${({ theme }) =>
        theme.cmp.table.cellClickableWrapper.elevation.boxShadow}
      inset;
    outline: none;
  }
`;

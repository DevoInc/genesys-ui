import * as React from 'react';
import styled from 'styled-components';

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
}

export const StyledHeaderCell = styled.th<StyledHeaderCellProps>`
  ${({ theme }) => cellMixin({ theme })}
  left: 0;
  justify-content: ${({ $horAlign }) =>
    $horAlign
      ? (CELL_ALIGN_MAP[$horAlign] as React.CSSProperties['justifyContent'])
      : 'space-between'};
  gap: ${({ theme }) => getSpacingPropCss(theme)('cmp-xs')};
  transform: ${({ $offsetX }) => `translateX(${$offsetX}px)`};
  width: ${({ $width }) => $width};
  height: 100%;
  padding: ${({ theme, $density }) =>
    `${theme.cmp.table.cell.space.padding.ver[$density].base} ${theme.cmp.table.cell.space.padding.hor[$density]}`};
  cursor: ${({ sortable }) => sortable && 'pointer'};
`;

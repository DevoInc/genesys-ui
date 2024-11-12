import styled from 'styled-components';

import { typoMixin } from '@devoinc/genesys-ui';
import {
  TCellHorAlign,
  TCellVerAlign,
  TColDef,
  TDensity,
} from '../declarations';
import { CELL_ALIGN_MAP } from '../constants';

export interface StyledCellWrapperProps extends Omit<TColDef, 'id'> {
  $clickable?: boolean;
  $horAlign?: TCellHorAlign;
  $isEditMode?: boolean;
  $verAlign?: TCellVerAlign;
  $density?: TDensity;
  $toEdge?: boolean;
  $isSelected?: boolean;
}

export const StyledCellWrapper = styled.div<StyledCellWrapperProps>`
  ${({ theme, textAlign }) => typoMixin({ theme, $textAlign: textAlign })};
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: ${({ $verAlign }) =>
    CELL_ALIGN_MAP[$verAlign || 'center'] as React.CSSProperties['alignItems']};
  justify-content: ${({ $horAlign }) =>
    CELL_ALIGN_MAP[
      $horAlign || 'left'
    ] as React.CSSProperties['justifyContent']};
  width: 100%;
  height: 100%;
  padding: ${({ $toEdge, $density, theme }) =>
    $toEdge
      ? '0'
      : `${theme.cmp.table.cell.space.padding.ver[$density].base} ${theme.cmp.table.cell.space.padding.hor[$density]}`};
`;

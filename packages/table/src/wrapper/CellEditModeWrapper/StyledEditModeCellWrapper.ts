import styled, { css } from 'styled-components';

import { btnResetMixin, typoMixin } from '@devoinc/genesys-ui';

import { CELL_ALIGN_MAP } from '../../constants';
import {
  TCellHorAlign,
  TCellVerAlign,
  TColDef,
  TDensity,
} from '../../declarations';

export interface StyledCellWrapperProps extends Omit<TColDef, 'id'> {
  $clickable?: boolean;
  $horAlign?: TCellHorAlign;
  $isEditMode?: boolean;
  $verAlign?: TCellVerAlign;
  $density?: TDensity;
  $toEdge?: boolean;
}

export const StyledEditModeCellWrapper = styled.button<StyledCellWrapperProps>`
  ${btnResetMixin};
  user-select: auto;
  outline: none;
  cursor: pointer;
  transition: background-color ease
    ${({ theme }) =>
      theme.cmp.table.cellClickableWrapper.mutation.transitionDuration};
  ${({ $isEditMode, theme }) => {
    const tokens = theme.cmp.table.cellClickableWrapper;
    const boxShadow = tokens.elevation.boxShadow;
    return css`
      ${!$isEditMode &&
      css`
        &:hover,
        &:active {
          background-color: ${tokens.color.background.hovered};
        }
        &:focus {
          box-shadow: ${boxShadow};
        }
      `}

      ${$isEditMode &&
      css`
        &:has(:focus) {
          background-color: ${tokens.color.background.hovered};
        }
        &:not(:has(:focus)) {
          box-shadow: ${boxShadow};
        }
      `}
    `;
  }}
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

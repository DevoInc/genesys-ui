import React from 'react';
import styled, { css } from 'styled-components';
import { CELL_ALIGN_MAP } from '../../constants';
import {
  CellHorAlign,
  CellVerAlign,
  ColumnCellStyleProps,
} from '../../declarations';
import { btnResetMixin, typoMixin } from '@devoinc/genesys-ui';

export interface StyledTableCellWrapperProps extends ColumnCellStyleProps {
  clickable?: boolean;
  horAlign?: CellHorAlign;
  isEditMode?: boolean;
  paddingHor?: React.CSSProperties['paddingLeft'];
  paddingVer?: React.CSSProperties['paddingBottom'];
  verAlign?: CellVerAlign;
}

export const StyledTableCellWrapper = styled.div<StyledTableCellWrapperProps>`
  ${({ clickable, isEditMode, theme }) => {
    const tokens = theme.cmp.table.cellClickableWrapper;
    return css`
      ${clickable &&
      css`
        ${btnResetMixin};
        user-select: auto;
        outline: none;
        cursor: pointer;
        transition: background-color ease ${tokens.mutation.transitionDuration};

        ${!isEditMode &&
        css`
          &:hover,
          &:active {
            background-color: ${tokens.color.background.hovered};
          }

          &:focus {
            box-shadow: ${theme.alias.elevation.boxShadow.base.focused};
          }
        `}
      `}

      ${isEditMode &&
      css`
        &:has(:focus) {
          background-color: ${tokens.color.background.hovered};
        }

        &:not(:has(:focus)) {
          box-shadow: ${theme.alias.elevation.boxShadow.base.focused};
        }
      `}
    `;
  }}
  ${({ theme, textAlign }) => typoMixin({ theme, textAlign })};
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: ${({ verAlign }) => CELL_ALIGN_MAP[verAlign || 'center']};
  justify-content: ${({ horAlign }) => CELL_ALIGN_MAP[horAlign || 'left']};
  width: 100%;
  height: 100%;
  padding: ${({ paddingVer, paddingHor, toEdge }) =>
    toEdge ? '0' : `${paddingVer} ${paddingHor}`};
`;

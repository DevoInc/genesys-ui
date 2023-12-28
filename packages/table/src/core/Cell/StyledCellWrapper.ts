import styled, { css } from 'styled-components';
import { CELL_ALIGN_MAP } from '../../constants';
import {
  CellHorAlign,
  CellVerAlign,
  ColDef,
  Density,
} from '../../declarations';
import { btnResetMixin, typoMixin } from '@devoinc/genesys-ui';

export interface StyledCellWrapperProps extends Omit<ColDef, 'id'> {
  clickable?: boolean;
  horAlign?: CellHorAlign;
  isEditMode?: boolean;
  verAlign?: CellVerAlign;
  density?: Density;
}

export const StyledCellWrapper = styled.div<StyledCellWrapperProps>`
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
  padding: ${({ toEdge, density, theme }) =>
    toEdge
      ? '0'
      : `${theme.cmp.table.cell.space.padding.ver[density].base} ${theme.cmp.table.cell.space.padding.hor[density]}`};
`;

import React from 'react';
import styled, { css } from 'styled-components';
import { ColumnCellStyleProps } from '../../declarations';
import { btnResetMixin, typoMixin } from '@devoinc/genesys-ui';

interface StyledTableCellWrapperProps extends ColumnCellStyleProps {
  clickable?: boolean;
  isEditMode?: boolean;
  paddingVer?: React.CSSProperties['paddingBottom'];
  paddingHor?: React.CSSProperties['paddingLeft'];
}

const alignMap = {
  left: 'flex-start',
  right: 'flex-end',
  center: 'center',
  top: 'flex-start',
  bottom: 'flex-end',
};

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

        &:hover,
        &:active {
          background-color: ${tokens.color.background.hovered};
        }

        &:focus {
          box-shadow: ${theme.alias.elevation.boxShadow.base.focused};
        }
      `}

      ${isEditMode &&
      css`
        background-color: ${tokens.color.background.hovered};
      `}
    `;
  }}
  ${({ theme, textAlign }) => typoMixin({ theme, textAlign })};
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: ${({ align }) => alignMap[align?.vertical || 'center']};
  justify-content: ${({ align }) => alignMap[align?.horizontal || 'left']};
  width: 100%;
  height: 100%;
  padding: ${({ paddingVer, paddingHor, toEdge }) =>
    toEdge ? '0' : `${paddingVer} ${paddingHor}`};
`;

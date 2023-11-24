import React from 'react';
import styled, { DefaultTheme } from 'styled-components';

interface StyledTableCellWrapperProps {
  cellWidth?: React.CSSProperties['width'];
  height?: React.CSSProperties['height'];
  offsetX?: number;
  theme: DefaultTheme;
}

export const StyledTableCell = styled.td.attrs(
  ({ cellWidth, theme, offsetX, height }: StyledTableCellWrapperProps) => ({
    style: {
      width: cellWidth,
      color: theme.alias.color.text.body.base,
      left: `${offsetX}px`,
      height,
    },
  }),
)<StyledTableCellWrapperProps>`
  position: absolute;
  top: 0;
  box-sizing: border-box;
  padding: 0 1.2rem;
  overflow: hidden;
`;

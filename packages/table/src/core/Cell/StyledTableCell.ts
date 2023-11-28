import React from 'react';
import styled, { DefaultTheme } from 'styled-components';

interface StyledTableCellProps {
  cellWidth?: React.CSSProperties['width'];
  height?: React.CSSProperties['height'];
  offsetX?: number;
  theme: DefaultTheme;
}

export const StyledTableCell = styled.td.attrs(
  ({ cellWidth, theme, offsetX, height }: StyledTableCellProps) => ({
    style: {
      width: cellWidth,
      color: theme.alias.color.text.body.base,
      left: `${offsetX}px`,
      height,
    },
  }),
)<StyledTableCellProps>`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 100%;
  overflow: hidden;
  flex: 0 0 auto;
`;

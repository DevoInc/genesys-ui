import React from 'react';
import styled, { DefaultTheme } from 'styled-components';

interface StyledTableCellProps {
  cellWidth?: React.CSSProperties['width'];
  offsetX?: number;
  theme: DefaultTheme;
}

export const StyledTableCell = styled.td.attrs(
  ({ cellWidth, theme, offsetX }: StyledTableCellProps) => ({
    style: {
      width: cellWidth,
      color: theme.alias.color.text.body.base,
      left: `${offsetX}px`,
    },
  }),
)<StyledTableCellProps>`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 100%;
  flex: 0 0 auto;
`;

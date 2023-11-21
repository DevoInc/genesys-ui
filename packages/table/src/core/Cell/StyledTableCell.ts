import React from 'react';
import styled, { DefaultTheme } from 'styled-components';

interface StyledTableCellWrapperProps {
  cellFlex?: React.CSSProperties['flex'];
  cellWidth?: React.CSSProperties['width'];
  height?: React.CSSProperties['height'];
  theme: DefaultTheme;
}

export const StyledTableCell = styled.td.attrs(
  ({ cellWidth, theme }: StyledTableCellWrapperProps) => ({
    style: {
      //flex: cellFlex,
      width: cellWidth,
      color: theme.alias.color.text.body.base,
    },
  }),
)<StyledTableCellWrapperProps>`
  position: relative;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 1.2rem;
  height: 100%;
  overflow: hidden;
  flex: 0 0 auto;
`;

import styled from 'styled-components';
import * as React from 'react';

export interface StyledTableProps {
  $width?: React.CSSProperties['width'];
  minWidth?: React.CSSProperties['minWidth'];
  $height?: React.CSSProperties['height'];
}

export const StyledTable = styled.table<StyledTableProps>`
  position: relative;
  height: ${({ $height }) => ($height !== 0 ? `${$height}px` : 'auto')};
  width: ${({ $width }) => ($width !== 0 ? `${$width}px` : '100%')};
`;

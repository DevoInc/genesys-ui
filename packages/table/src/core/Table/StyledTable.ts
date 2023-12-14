import styled from 'styled-components';
import * as React from 'react';

export interface StyledTableProps {
  $width?: React.CSSProperties['width'];
  minWidth?: number;
  $height?: React.CSSProperties['height'];
}

export const StyledTable = styled.table<StyledTableProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  height: ${({ $height }) => $height || 'auto'};
  width: ${({ $width }) => $width || '100%'};
  min-width: ${({ minWidth }) => minWidth};
`;

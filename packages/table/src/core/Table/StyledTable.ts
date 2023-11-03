import * as React from 'react';
import styled from 'styled-components';

export interface StyledTableProps {
  width?: React.CSSProperties['width'];
  minWidth?: React.CSSProperties['minWidth'];
  height?: React.CSSProperties['height'];
}

export const StyledTable = styled.table<StyledTableProps>`
  position: relative;
  height: ${({ height }) => height};
  width: 100%;
`;

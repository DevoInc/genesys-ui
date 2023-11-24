import * as React from 'react';
import styled from 'styled-components';
import { scrollbars } from '@devoinc/genesys-ui';

export interface StyledTableProps {
  width?: React.CSSProperties['width'];
  minWidth?: React.CSSProperties['minWidth'];
  maxHeight?: React.CSSProperties['maxHeight'];
}

export const StyledTable = styled.table<StyledTableProps>`
  ${({ theme }) => scrollbars({ theme })};
  position: relative;
  display: block;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  overflow: auto;
  max-height: ${({ maxHeight }) => maxHeight};
`;

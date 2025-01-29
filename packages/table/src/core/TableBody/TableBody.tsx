import React from 'react';

import { StyledTableBody } from './StyledTableBody';

export interface TableBodyProps {
  width: number;
  height: number;
  tableId: string;
  children: React.ReactNode;
}

export const TableBody: React.FC<TableBodyProps> = ({
  width,
  height,
  tableId,
  children,
}) => (
  <StyledTableBody $height={height} $width={width} id={`${tableId}__body`}>
    {children}
  </StyledTableBody>
);

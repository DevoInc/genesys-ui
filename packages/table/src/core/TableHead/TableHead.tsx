import React from 'react';

import { StyledTableHead } from './StyledTableHead';

interface TableHeadProps {
  scrolled?: boolean;
  width: number;
  children: React.ReactNode;
  tableId: string;
}

export const TableHead: React.FC<TableHeadProps> = ({
  scrolled,
  width,
  children,
  tableId,
}) => (
  <StyledTableHead $scrolled={scrolled} $width={width} id={`${tableId}__head`}>
    {children}
  </StyledTableHead>
);

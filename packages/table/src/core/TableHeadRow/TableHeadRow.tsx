import React from 'react';

import { StyledTableHeadRow } from './StyledTableHeadRow';
import type { TDensity } from '../../declarations';

interface TableHeadRowProps {
  density?: TDensity;
  showFilters: boolean;
  children: React.ReactNode;
}

export const TableHeadRow: React.FC<TableHeadRowProps> = ({
  density,
  showFilters,
  children,
}) => (
  <StyledTableHeadRow $density={density} $compactHeader={showFilters}>
    {children}
  </StyledTableHeadRow>
);

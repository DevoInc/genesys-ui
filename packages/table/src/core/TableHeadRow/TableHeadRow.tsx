import React from 'react';

import { StyledTableHeadRow } from './StyledTableHeadRow';
import type { TDensity } from '../../declarations';

interface TableHeadRowProps {
  density?: TDensity;
  showFilters: boolean;
  children: React.ReactNode;
  tableId: string;
}

export const TableHeadRow: React.FC<TableHeadRowProps> = ({
  density,
  showFilters,
  children,
  tableId,
}) => (
  <StyledTableHeadRow
    $density={density}
    $compactHeader={showFilters}
    id={!showFilters ? `${tableId}__head_filter` : `${tableId}__head_name`}
  >
    {children}
  </StyledTableHeadRow>
);

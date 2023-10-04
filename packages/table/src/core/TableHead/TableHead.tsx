import React from 'react';

import { StyledTableHead } from './StyledTableHead';
import { StyledTableHeadRow } from './StyledTableHeadRow';
import { HeaderCell } from '../HeaderCell';
import { ColDef } from '../../declarations';

interface TableHeadProps {
  columnDefs: ColDef[];
  scrolled?: boolean;
}

export const TableHead: React.FC<TableHeadProps> = ({
  columnDefs,
  scrolled,
}) => {
  return (
    <StyledTableHead scrolled={scrolled}>
      <StyledTableHeadRow scrolled={scrolled}>
        {columnDefs.map((columnDef) => (
          <HeaderCell
            key={columnDef.colId}
            columnDef={columnDef}
            scrolled={scrolled}
          />
        ))}
      </StyledTableHeadRow>
    </StyledTableHead>
  );
};

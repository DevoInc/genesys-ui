import React from 'react';
import { StyledTableHead } from './StyledTableHead';
import { StyledTableHeadRow } from './StyledTableHeadRow';
import { HeaderCell } from '../HeaderCell';
import { Virtualizer } from '@tanstack/react-virtual';
import { ColDef } from '../../declarations';
import { getHeaderNameByID } from '../utils';

interface TableHeadProps {
  scrolled?: boolean;
  columnVirtualizer: Virtualizer<undefined, Element>;
  columnDefs: ColDef[];
}

export const TableHead: React.FC<TableHeadProps> = ({
  scrolled,
  columnVirtualizer,
  columnDefs,
}) => (
  <StyledTableHead scrolled={scrolled}>
    <StyledTableHeadRow scrolled={scrolled}>
      {columnVirtualizer.getVirtualItems().map((virtualColumn) => (
        <HeaderCell
          key={virtualColumn.key}
          virtualColumn={virtualColumn}
          scrolled={scrolled}
          headerName={getHeaderNameByID(columnDefs, virtualColumn)}
        />
      ))}
    </StyledTableHeadRow>
  </StyledTableHead>
);

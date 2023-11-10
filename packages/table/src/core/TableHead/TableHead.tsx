import React from 'react';
import { StyledTableHead } from './StyledTableHead';
import { StyledTableHeadRow } from './StyledTableHeadRow';
import { HeaderCell } from '../HeaderCell';
import { Virtualizer } from '@tanstack/react-virtual';

interface TableHeadProps {
  scrolled?: boolean;
  columnVirtualizer: Virtualizer<undefined, Element>;
}

export const TableHead: React.FC<TableHeadProps> = ({
  scrolled,
  columnVirtualizer,
}) => (
  <StyledTableHead scrolled={scrolled}>
    <StyledTableHeadRow scrolled={scrolled}>
      {columnVirtualizer.getVirtualItems().map((virtualColumn) => (
        <HeaderCell
          key={virtualColumn.key}
          virtualColumn={virtualColumn}
          scrolled={scrolled}
        />
      ))}
    </StyledTableHeadRow>
  </StyledTableHead>
);

import React from 'react';
import { StyledTableHead } from './StyledTableHead';
import { StyledTableHeadRow } from './StyledTableHeadRow';
import { HeaderCell } from '../HeaderCell';
import { VirtualItem, Virtualizer } from '@tanstack/react-virtual';
import { ColDef } from '../../declarations';
import { getColDefByID } from '../utils';

interface TableHeadProps {
  scrolled?: boolean;
  columnVirtualizer: Virtualizer<HTMLDivElement, Element>;
  columnDefs: ColDef[];
}

export const TableHead: React.FC<TableHeadProps> = ({
  scrolled,
  columnVirtualizer,
  columnDefs,
}) => {
  return (
    <StyledTableHead
      scrolled={scrolled}
      width={`${columnVirtualizer.getTotalSize()}px`}
    >
      <StyledTableHeadRow
        scrolled={scrolled}
        width={`${columnVirtualizer.getTotalSize()}px`}
        height={'40px'}
      >
        {columnVirtualizer
          .getVirtualItems()
          .map((virtualColumn: VirtualItem) => (
            <HeaderCell
              key={virtualColumn.key}
              scrolled={scrolled}
              colDef={getColDefByID(columnDefs, virtualColumn)}
              headerCellWidth={`${virtualColumn.size}px`}
              offsetX={virtualColumn.start}
            />
          ))}
      </StyledTableHeadRow>
    </StyledTableHead>
  );
};

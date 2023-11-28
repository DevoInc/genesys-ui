import React from 'react';
import { StyledTableHead } from './StyledTableHead';
import { StyledTableHeadRow } from './StyledTableHeadRow';
import { HeaderCell } from '../HeaderCell';
import { VirtualItem, Virtualizer } from '@tanstack/react-virtual';
import { ColDef } from '../../declarations';
import { getColDefByID } from '../utils';
import { TableContext } from '../Table/context';

interface TableHeadProps {
  scrolled?: boolean;
  columnVirtualizer: Virtualizer<HTMLDivElement, Element>;
  columnDefs: ColDef[];
}

export const TableHead: React.FC<TableHeadProps> = ({
  columnVirtualizer,
  columnDefs,
  scrolled,
}) => {
  const { styles, measures } = React.useContext(TableContext);
  return (
    <StyledTableHead
      scrolled={scrolled}
      width={`${columnVirtualizer.getTotalSize()}px`}
      height={`${measures.head.height}px`}
    >
      <StyledTableHeadRow width={`${columnVirtualizer.getTotalSize()}px`}>
        {columnVirtualizer
          .getVirtualItems()
          .map((virtualColumn: VirtualItem) => (
            <HeaderCell
              key={virtualColumn.key}
              colDef={getColDefByID(columnDefs, virtualColumn)}
              headerCellWidth={`${virtualColumn.size}px`}
              offsetX={virtualColumn.start}
            />
          ))}
      </StyledTableHeadRow>
    </StyledTableHead>
  );
};

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
  const { measures, sizes } = React.useContext(TableContext);
  return (
    <StyledTableHead
      scrolled={scrolled}
      $width={measures?.body?.total?.width || '100%'}
      $height={`${sizes.head.height}px`}
    >
      <StyledTableHeadRow width={`${columnVirtualizer.getTotalSize()}px`}>
        {columnVirtualizer
          .getVirtualItems()
          .map((virtualColumn: VirtualItem) => (
            <HeaderCell
              key={`header-cell-${virtualColumn.key}`}
              colDef={getColDefByID(columnDefs, virtualColumn)}
              width={`${virtualColumn.size}px`}
              offsetX={virtualColumn.start}
            />
          ))}
      </StyledTableHeadRow>
    </StyledTableHead>
  );
};

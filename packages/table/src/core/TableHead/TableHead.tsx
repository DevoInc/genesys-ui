import React from 'react';
import { StyledTableHead } from './StyledTableHead';
import { StyledTableHeadRow } from './StyledTableHeadRow';
import { HeaderCell } from '../HeaderCell';
import { VirtualItem, Virtualizer } from '@tanstack/react-virtual';
import { ColDef } from '../../declarations';
import { getColDefByID } from '../utils';
import { TableContext } from '../Table/context';
import { InputControl, SelectControl } from '@devoinc/genesys-ui';

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
    <StyledTableHead scrolled={scrolled} $width={measures?.body?.total?.width}>
      <StyledTableHeadRow $height={`${sizes.head.height}px`}>
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
      <StyledTableHeadRow $height={`${sizes.head.height}px`}>
        {columnVirtualizer
          .getVirtualItems()
          .map((virtualColumn: VirtualItem) => {
            return (
              <HeaderCell
                key={`header-filter-cell-${virtualColumn.key}`}
                colDef={getColDefByID(columnDefs, virtualColumn)}
                isFilterCell
                width={`${virtualColumn.size}px`}
                offsetX={virtualColumn.start}
              />
            );
          })}
      </StyledTableHeadRow>
    </StyledTableHead>
  );
};

import React from 'react';
import { StyledTableHead } from './StyledTableHead';
import { StyledTableHeadRow } from './StyledTableHeadRow';
import { HeaderCell } from '../HeaderCell';
import { Virtualizer } from '@tanstack/react-virtual';
import { ColDef } from '../../declarations';
import { getColDefByID } from '../utils';

interface TableHeadProps {
  scrolled?: boolean;
  columnVirtualizer: Virtualizer<undefined, Element>;
  columnDefs: ColDef[];
}

export const TableHead: React.FC<TableHeadProps> = ({
  scrolled,
  columnVirtualizer,
  columnDefs,
}) => {
  const columnsNumber = columnDefs.length;
  return (
    <StyledTableHead scrolled={scrolled}>
      <StyledTableHeadRow scrolled={scrolled}>
        {columnVirtualizer.getVirtualItems().map((virtualColumn) => {
          const columnWidthProp = getColDefByID(columnDefs, virtualColumn)
            ?.cellStyle?.width;
          return (
            <HeaderCell
              key={virtualColumn.key}
              scrolled={scrolled}
              colDef={getColDefByID(columnDefs, virtualColumn)}
              headerCellFlex={
                columnWidthProp
                  ? `1 1 ${columnWidthProp}%`
                  : `1 1 calc(100% / ${columnsNumber})`
              }
              headerCellWidth={
                virtualColumn?.size ? `${virtualColumn.size}px` : null
              }
              virtualColumn={virtualColumn}
            />
          );
        })}
      </StyledTableHeadRow>
    </StyledTableHead>
  );
};

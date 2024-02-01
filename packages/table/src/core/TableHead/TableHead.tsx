import React from 'react';
import { VirtualItem, Virtualizer } from '@tanstack/react-virtual';

import { StyledTableHead } from './StyledTableHead';
import { StyledTableHeadRow } from './StyledTableHeadRow';
import { HeaderCell } from '../HeaderCell';
import { ColDef, Data } from '../../declarations';
import { getColDefByID } from '../utils';
import { TableContext } from '../../context/TableContext';
import { HeaderTextRenderer } from '../../headerRenderers';
import { FilterValue } from '../../filters';

interface TableHeadProps {
  scrolled?: boolean;
  columnVirtualizer: Virtualizer<HTMLDivElement, Element>;
  colDefs: ColDef[];
  data: Data;
  width: number;
}

export const TableHead: React.FC<TableHeadProps> = ({
  columnVirtualizer,
  colDefs,
  scrolled,
  data,
  width,
}) => {
  const { showFilters, resizableColumns, density, onSort, onFilter } =
    React.useContext(TableContext);
  const items = columnVirtualizer?.getVirtualItems() ?? [];
  return (
    <StyledTableHead scrolled={scrolled} $width={width}>
      <StyledTableHeadRow density={density}>
        {items.map((virtualColumn: VirtualItem) => {
          const colDef = getColDefByID(colDefs, virtualColumn);
          const headerOnFilterPosition =
            showFilters && (colDef?.headerOnFilterPosition ?? false);
          return !headerOnFilterPosition ? (
            <HeaderCell
              key={`header-cell-${virtualColumn.key}`}
              colDef={colDef}
              width={`${virtualColumn.size}px`}
              offsetX={virtualColumn.start}
              resizable={colDef?.resizable ?? resizableColumns ?? false}
              onSort={onSort}
            >
              {colDef?.headerRenderer ? (
                colDef.headerRenderer({ colDef })
              ) : (
                <HeaderTextRenderer colDef={colDef} />
              )}
            </HeaderCell>
          ) : undefined;
        })}
      </StyledTableHeadRow>
      {showFilters ? (
        <StyledTableHeadRow density={density}>
          {items.map((virtualColumn: VirtualItem) => {
            const colDef = getColDefByID(colDefs, virtualColumn);
            return colDef?.cellFilter || colDef?.headerOnFilterPosition ? (
              <HeaderCell
                key={`header-filter-cell-${virtualColumn.key}`}
                colDef={colDef}
                resizable={false}
                width={`${virtualColumn.size}px`}
                offsetX={virtualColumn.start}
              >
                {colDef?.headerOnFilterPosition ? (
                  colDef?.headerRenderer ? (
                    colDef.headerRenderer({ colDef })
                  ) : (
                    <HeaderTextRenderer colDef={colDef} />
                  )
                ) : colDef.cellFilter ? (
                  colDef.cellFilter({
                    colDef,
                    data,
                    onChange: (value: FilterValue, type: string) => {
                      onFilter(colDef, value, type);
                    },
                  })
                ) : null}
              </HeaderCell>
            ) : undefined;
          })}
        </StyledTableHeadRow>
      ) : null}
    </StyledTableHead>
  );
};

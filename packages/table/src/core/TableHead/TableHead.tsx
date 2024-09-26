import React from 'react';
import { Virtualizer } from '@tanstack/react-virtual';

import type { TColDef, TData } from '../../declarations';

import { TableContext } from '../../context';

import { TTextFilterValue } from '../../filters';
import { HeaderTextRenderer } from '../../headerRenderers';
import { HeaderCell } from '../HeaderCell';

import { StyledTableHead } from './StyledTableHead';
import { StyledTableHeadRow } from './StyledTableHeadRow';

interface TableHeadProps {
  scrolled?: boolean;
  columnVirtualizer: Virtualizer<HTMLDivElement, Element>;
  colDefs: TColDef[];
  data: TData;
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
    <StyledTableHead $scrolled={scrolled} $width={width}>
      <StyledTableHeadRow $density={density}>
        {colDefs.map((colDef) => {
          const virtualColumn = items.find((item) => item.key === colDef.id);
          const headerOnFilterPosition =
            showFilters && (colDef?.headerOnFilterPosition ?? false);
          return (
            !headerOnFilterPosition &&
            virtualColumn && (
              <HeaderCell
                key={`header-cell-${colDef.id}`}
                colDef={colDef}
                width={virtualColumn && `${virtualColumn.size}px`}
                offsetX={virtualColumn && virtualColumn.start}
                resizable={colDef?.resizable ?? resizableColumns ?? false}
                onSort={onSort}
              >
                {colDef?.headerRenderer ? (
                  colDef.headerRenderer({ colDef })
                ) : (
                  <HeaderTextRenderer colDef={colDef} />
                )}
              </HeaderCell>
            )
          );
        })}
      </StyledTableHeadRow>
      {showFilters ? (
        <StyledTableHeadRow $density={density}>
          {colDefs.map((colDef) => {
            const virtualColumn = items.find((item) => item.key === colDef.id);
            return (
              (colDef?.cellFilter || colDef?.headerOnFilterPosition) &&
              virtualColumn && (
                <HeaderCell
                  key={`header-filter-cell-${colDef.id}`}
                  colDef={colDef}
                  resizable={false}
                  width={virtualColumn ? `${virtualColumn.size}px` : 'auto'}
                  offsetX={virtualColumn ? virtualColumn.start : undefined}
                  showFilters={showFilters}
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
                      onChange: (value: TTextFilterValue, type: string) => {
                        onFilter(colDef, value, type);
                      },
                    })
                  ) : null}
                </HeaderCell>
              )
            );
          })}
        </StyledTableHeadRow>
      ) : null}
    </StyledTableHead>
  );
};

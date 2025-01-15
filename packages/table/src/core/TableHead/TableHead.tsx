import React from 'react';

import { TableContext } from '../../context';

import { TTextFilterValue } from '../../filters';
import { HeaderTextRenderer } from '../../headerRenderers';
import { HeaderCell } from '../HeaderCell';

import { StyledTableHead } from './StyledTableHead';
import { StyledTableHeadRow } from './StyledTableHeadRow';

interface TableHeadProps {
  scrolled?: boolean;
  items: any;
  width: number;
}

export const TableHead: React.FC<TableHeadProps> = ({
  items,
  scrolled,
  width,
}) => {
  const { showFilters, density, onFilter, colDefs, id, headerCellDefs } =
    React.useContext(TableContext);
  return (
    <StyledTableHead $scrolled={scrolled} $width={width} id={`${id}__head`}>
      <StyledTableHeadRow $density={density} $compactHeader={showFilters}>
        {colDefs.map((colDef) => {
          const virtualColumn = items.find((item) => item.key === colDef.id);
          const headerCellDef = headerCellDefs.find(
            (cell) => cell.colId === colDef.id,
          );

          const headerOnFilterPosition =
            showFilters && (colDef?.headerOnFilterPosition ?? false);
          return (
            !headerOnFilterPosition &&
            virtualColumn && (
              <HeaderCell
                headerCellDef={headerCellDef || null}
                key={`header-cell-${colDef.id}`}
                colDef={colDef}
                width={virtualColumn && `${virtualColumn.size}px`}
                offsetX={virtualColumn && virtualColumn.start}
                title={colDef.headerName}
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
                  width={virtualColumn ? `${virtualColumn.size}px` : 'auto'}
                  offsetX={virtualColumn ? virtualColumn.start : undefined}
                  filter={true}
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

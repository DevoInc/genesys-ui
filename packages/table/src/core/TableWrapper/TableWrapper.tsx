import * as React from 'react';
import { useTheme } from 'styled-components';
import { useSize, useUpdateEffect } from 'ahooks';

import { getPxFromRem } from '@devoinc/genesys-ui';

import {
  useTableVirtualizationColumn,
  useTableVirtualizationRow,
} from '../../hooks';
import { TableContext } from '../../context';
import type { TTextFilterValue } from '../../filters';
import { TableHead } from '../TableHead';
import { TableHeadRow } from '../TableHeadRow';
import { TableBody } from '../TableBody';
import { Row } from '../Row';
import { HeaderCell } from '../HeaderCell';
import { HeaderTextRenderer } from '../../headerRenderers';
import { StyledTable } from './StyledTable';
import { StyledTableWrapper } from './StyledTableWrapper';
import { getCellDef, getRowDef } from '../../helpers';
import type { TRowDef } from '../../declarations';
import { Cell } from '../Cell';

export const TableWrapper: React.FC = () => {
  const theme = useTheme();
  const {
    maxHeight,
    data,
    showFilters,
    density,
    cellDefs,
    rowDefs,
    colDefs,
    id,
    onFilter,
    striped,
    stripedFn,
  } = React.useContext(TableContext);

  const ref = React.useRef<HTMLDivElement>();
  const size = useSize(ref);
  const rowVirtualizer = useTableVirtualizationRow({ ref });
  const columnVirtualizer = useTableVirtualizationColumn({
    ref,
    wrapperWidth: size?.width ?? 0,
  });

  const width = columnVirtualizer.getTotalSize();
  const rowsTotalSize = rowVirtualizer.getTotalSize();

  const headHeight = React.useMemo(
    () => getPxFromRem(theme.cmp.table.head.size.height[density]),
    [density, theme],
  );
  const height =
    (rowsTotalSize === 0 ? 1 : rowsTotalSize) +
    headHeight * (showFilters ? 2 : 1);

  useUpdateEffect(() => {
    rowVirtualizer.measure();
  }, [rowDefs, data]);

  const items = columnVirtualizer?.getVirtualItems() ?? [];
  return (
    <StyledTableWrapper
      ref={ref}
      $maxHeight={maxHeight}
      style={{ opacity: size?.width > 0 ? 1 : 0 }}
      data-testid={'tableWrapper'}
    >
      <StyledTable
        $height={height}
        $width={width}
        role={'grid'}
        aria-rowcount={data.length}
        aria-colcount={colDefs.length}
        id={id}
      >
        <TableHead
          tableId={id}
          scrolled={rowVirtualizer.scrollOffset !== 0}
          width={width}
        >
          <TableHeadRow
            density={density}
            showFilters={showFilters}
            tableId={id}
          >
            {colDefs.map((colDef) => {
              const virtualColumn = items.find(
                (item) => item.key === colDef.id,
              );

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
          </TableHeadRow>
          {showFilters ? (
            <TableHeadRow density={density} showFilters={false} tableId={id}>
              {colDefs.map((colDef) => {
                const virtualColumn = items.find(
                  (item) => item.key === colDef.id,
                );
                return (
                  (colDef?.cellFilter || colDef?.headerOnFilterPosition) &&
                  virtualColumn && (
                    <HeaderCell
                      key={`header-filter-cell-${colDef.id}`}
                      colDef={colDef}
                      width={virtualColumn ? `${virtualColumn.size}px` : 'auto'}
                      offsetX={virtualColumn ? virtualColumn.start : undefined}
                      filter={true}
                      title={colDef.headerName}
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
                            if (onFilter) {
                              onFilter(colDef, value, type);
                            }
                          },
                        })
                      ) : null}
                    </HeaderCell>
                  )
                );
              })}
            </TableHeadRow>
          ) : null}
        </TableHead>
        <TableBody width={width} height={height} tableId={id}>
          {rowVirtualizer.getVirtualItems().map((virtualRow) => {
            const rowData = data[virtualRow.index];
            const rowDef = (getRowDef(rowDefs, rowData.id as string) ??
              {}) as TRowDef;
            return (
              <Row
                key={'tb_' + virtualRow.key}
                striped={striped}
                stripe={
                  striped && stripedFn(virtualRow.index, rowData)
                    ? 'even'
                    : 'odd'
                }
                rowDef={rowDef}
                width={columnVirtualizer.getTotalSize()}
                height={virtualRow.size}
                start={virtualRow.start}
                rowIndex={virtualRow.index}
              >
                {rowDef?.cellRenderer ? (
                  <Cell
                    cellDef={{
                      colId: 'afterRow',
                      rowId: rowDef.id,
                    }}
                    colDef={{
                      id: 'afterRow',
                      cellRenderer: rowDef.cellRenderer,
                    }}
                    colIndex={0}
                    data={null}
                    height={virtualRow.size}
                    key={`cell-0`}
                    offsetX={0}
                    row={rowData}
                    rowIndex={virtualRow.index}
                    rowDef={rowDef}
                    width={columnVirtualizer.getTotalSize()}
                  />
                ) : (
                  colDefs.map((colDef, index) => {
                    const cellDef = getCellDef(
                      cellDefs,
                      colDef.id,
                      rowDef.id || String(virtualRow.index),
                    );
                    const virtualColumn = columnVirtualizer
                      .getVirtualItems()
                      .find((col) => col.key === colDef.id);
                    return (
                      virtualColumn && (
                        <Cell
                          cellDef={cellDef}
                          colDef={colDef}
                          data={rowData[colDef.id] ?? ''}
                          height={virtualRow.size}
                          key={`cell-${colDef.id}`}
                          offsetX={virtualColumn?.start}
                          row={rowData}
                          rowIndex={virtualRow.index}
                          colIndex={index}
                          rowDef={rowDef}
                          width={virtualColumn?.size}
                        />
                      )
                    );
                  })
                )}
              </Row>
            );
          })}
        </TableBody>
      </StyledTable>
    </StyledTableWrapper>
  );
};

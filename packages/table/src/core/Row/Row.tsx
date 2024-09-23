import * as React from 'react';
import { Virtualizer } from '@tanstack/react-virtual';

import { TableContext } from '../../context/TableContext';
import { Cell } from '../Cell';
import { StyledTableRow, type StyledTableRowProps } from './StyledTableRow';
import { getCellDef, getRowDef } from '../../helpers';
import type { TRowDef, TStateRow } from '../../declarations';

interface RowProps extends StyledTableRowProps {
  rowData: { [key: string]: unknown };
  columnVirtualizer: Virtualizer<HTMLDivElement, Element>;
  state?: TStateRow;
  index: number;
  height?: number;
  start?: number;
}

export const Row: React.FC<RowProps> = ({
  columnVirtualizer,
  rowData,
  isAfterRow,
  isDragging,
  state = 'enabled',
  index,
  height,
  start,
}) => {
  const { striped, colDefs, rowDefs, cellDefs } =
    React.useContext(TableContext);
  const rowDef = (getRowDef(rowDefs, rowData.id as string) ?? {}) as TRowDef;
  const virtualColumns = columnVirtualizer.getVirtualItems();
  return (
    <StyledTableRow
      $hide={rowDef?.hide ?? false}
      $even={(index + 1) % 2 === 0}
      isAfterRow={isAfterRow}
      isDragging={isDragging}
      $state={state}
      $striped={striped}
      css={rowDef?.style}
      style={{
        width: `${columnVirtualizer.getTotalSize()}px`,
        height: `${height}px`,
        transform: `translateY(${start}px)`,
      }}
    >
      {rowDef?.cellRenderer ? (
        <Cell
          colDef={{
            id: 'afterRow',
            cellRenderer: rowDef.cellRenderer,
          }}
          cellDef={{
            colId: 'afterRow',
            rowId: rowDef.id,
          }}
          height={height}
          key={`cell-0`}
          offsetX={0}
          width={columnVirtualizer.getTotalSize()}
          rowIndex={index}
          row={rowData}
          data={null}
          colSpan={colDefs.length}
        />
      ) : (
        colDefs.map((colDef) => {
          const cellDef = getCellDef(cellDefs, colDef.id, rowDef.id);
          const virtualColumn = virtualColumns.find(
            (col) => col.key === colDef.id,
          );
          return (
            virtualColumn && (
              <Cell
                colDef={colDef}
                cellDef={cellDef}
                data={rowData[colDef.id] ?? ''}
                height={height}
                key={`cell-${colDef.id}`}
                offsetX={virtualColumn && virtualColumn.start}
                width={virtualColumn && virtualColumn.size}
                rowIndex={index}
                row={rowData}
              />
            )
          );
        })
      )}
    </StyledTableRow>
  );
};

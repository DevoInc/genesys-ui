import * as React from 'react';
import { VirtualItem, Virtualizer } from '@tanstack/react-virtual';
import { TableContext } from '../../context/TableContext';
import { Cell } from '../Cell';
import { StyledTableRow, type StyledTableRowProps } from './StyledTableRow';
import { getCellDef, getRowDef } from '../../helpers';
import { TColDef, TRowDef, TStateRow } from '../../declarations';

interface RowProps extends StyledTableRowProps {
  rowData: { [key: string]: unknown };
  columnVirtualizer: Virtualizer<HTMLDivElement, Element>;
  virtualRow: VirtualItem;
  state?: TStateRow;
}

export const Row: React.FC<RowProps> = ({
  columnVirtualizer,
  rowData,
  isAfterRow,
  isDragging,
  state = 'enabled',
  virtualRow,
}) => {
  const { striped, colDefs, rowDefs, cellDefs } = React.useContext(TableContext);
  const rowDef = (getRowDef(rowDefs, rowData.id as string) ?? {}) as TRowDef;
  return (
    <StyledTableRow
      $height={virtualRow.size}
      $width={`${columnVirtualizer.getTotalSize()}px`}
      transform={`translateY(${virtualRow.start}px)`}
      $hide={rowDef?.hide ?? false}
      $even={(virtualRow.index + 1) % 2 === 0}
      isAfterRow={isAfterRow}
      isDragging={isDragging}
      $state={state}
      $striped={striped}
      css={rowDef?.style}
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
          height={virtualRow.size}
          key={`cell-0`}
          offsetX={0}
          width={columnVirtualizer.getTotalSize()}
          rowIndex={virtualRow.index}
          row={rowData}
          data={null}
          colSpan={colDefs.length}
        />
      ) : (
        columnVirtualizer
          .getVirtualItems()
          .map((virtualColumn: VirtualItem) => {
            const colDef = (colDefs[virtualColumn.index] ?? {}) as TColDef;
            const cellDef = getCellDef(cellDefs, colDef.id, rowDef.id);
            return (
              <Cell
                colDef={colDef}
                cellDef={cellDef}
                data={rowData[colDef.id] ?? ''}
                height={virtualRow.size}
                key={`cell-${virtualColumn.key}`}
                offsetX={virtualColumn.start}
                width={virtualColumn.size}
                rowIndex={virtualRow.index}
                row={rowData}
              />
            );
          })
      )}
    </StyledTableRow>
  );
};

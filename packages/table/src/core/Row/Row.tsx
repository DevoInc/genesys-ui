import * as React from 'react';
import type { Virtualizer } from '@tanstack/react-virtual';

import { TableContext } from '../../context/TableContext';
import { Cell } from '../Cell';
import { StyledTableRow, type StyledTableRowProps } from './StyledTableRow';
import { getCellDef, getRowDef } from '../../helpers';
import { TRowDef } from '../../declarations';
import { useTheme } from 'styled-components';

interface RowProps extends StyledTableRowProps {
  rowData: { [key: string]: unknown };
  columnVirtualizer: Virtualizer<HTMLDivElement, Element>;
  rowIndex: number;
  height?: number;
  start?: number;
}

export const Row: React.FC<RowProps> = ({
  columnVirtualizer,
  rowData,
  rowIndex,
  height,
  start,
}) => {
  const {
    striped,
    colDefs,
    rowDefs,
    cellDefs,
    stripedFn,
    highlightRowOnHover,
    highlightRowOnHoverFn,
    onRowDoubleClick,
    onRowKeyUp,
    onRowKeyDown,
  } = React.useContext(TableContext);
  const theme = useTheme();

  const rowDef = (getRowDef(rowDefs, rowData.id as string) ?? {}) as TRowDef;
  const stripedConditional = () =>
    stripedFn(rowIndex, rowData) ? 'even' : 'odd';
  return (
    <StyledTableRow
      $even={striped ? stripedConditional() : 'odd'}
      $hide={rowDef?.hide ?? false}
      $highlightRowOnHover={
        highlightRowOnHoverFn(rowDef) && highlightRowOnHover
      }
      $striped={striped}
      css={
        typeof rowDef?.style === 'function'
          ? rowDef?.style({
              theme,
              evenOddType: striped && (rowIndex + 1) % 2 === 0 ? 'even' : 'odd',
              striped,
            })
          : rowDef?.style
      }
      style={{
        width: `${columnVirtualizer.getTotalSize()}px`,
        height: `${height}px`,
        transform: `translateY(${start}px)`,
      }}
      aria-rowindex={rowIndex}
      onDoubleClick={() => {
        if (onRowDoubleClick) {
          onRowDoubleClick({ rowDef, rowIndex });
        }
      }}
      onKeyUp={(event) => {
        if (onRowKeyUp) {
          onRowKeyUp({ event, rowDef, rowIndex });
        }
      }}
      onKeyDown={(event) => {
        if (onRowKeyDown) {
          onRowKeyDown({ event, rowDef, rowIndex });
        }
      }}
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
          height={height}
          key={`cell-0`}
          offsetX={0}
          row={rowData}
          rowIndex={rowIndex}
          rowDef={rowDef}
          width={columnVirtualizer.getTotalSize()}
        />
      ) : (
        colDefs.map((colDef, index) => {
          const cellDef = getCellDef(
            cellDefs,
            colDef.id,
            rowDef.id || String(rowIndex),
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
                height={height}
                key={`cell-${colDef.id}`}
                offsetX={virtualColumn?.start}
                row={rowData}
                rowIndex={rowIndex}
                colIndex={index}
                rowDef={rowDef}
                width={virtualColumn?.size}
              />
            )
          );
        })
      )}
    </StyledTableRow>
  );
};

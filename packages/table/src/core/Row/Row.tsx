import * as React from 'react';
import { Virtualizer } from '@tanstack/react-virtual';

import { TableContext } from '../../context/TableContext';
import { Cell } from '../Cell';
import { StyledTableRow, type StyledTableRowProps } from './StyledTableRow';
import { getCellDef, getRowDef } from '../../helpers';
import { TRowDef } from '../../declarations';
import { useTheme } from 'styled-components';

interface RowProps extends StyledTableRowProps {
  rowData: { [key: string]: unknown };
  columnVirtualizer: Virtualizer<HTMLDivElement, Element>;
  index: number;
  height?: number;
  start?: number;
  wrapperHeight?: number;
}

export const Row: React.FC<RowProps> = ({
  columnVirtualizer,
  rowData,
  index,
  height,
  start,
  wrapperHeight,
}) => {
  const { striped, colDefs, rowDefs, cellDefs, stripedFn, highlightRowOnHover } =
    React.useContext(TableContext);
  const rowDef = (getRowDef(rowDefs, rowData.id as string) ?? {}) as TRowDef;
  const virtualColumns = columnVirtualizer.getVirtualItems();

  const theme = useTheme();
  return (
    <StyledTableRow
      $hide={rowDef?.hide ?? false}
      $even={striped ? stripedFn(index, rowData) ? 'even' : 'odd' : 'odd'}
      $striped={striped}
      $highlightRowOnHover={highlightRowOnHover}
      style={{
        width: `${columnVirtualizer.getTotalSize()}px`,
        height: `${height}px`,
        transform: `translateY(${start}px)`,
      }}
      css={
        typeof rowDef?.style === 'function'
          ? rowDef?.style({
              theme,
              evenOddType: striped && (index + 1) % 2 === 0 ? 'even' : 'odd',
              striped,
            })
          : rowDef?.style
      }
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
          wrapperHeight={wrapperHeight}
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

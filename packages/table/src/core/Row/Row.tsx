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
  index: number;
  height?: number;
  start?: number;
}

export const Row: React.FC<RowProps> = ({
  columnVirtualizer,
  rowData,
  index,
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
  } = React.useContext(TableContext);
  const theme = useTheme();

  const rowDef = (getRowDef(rowDefs, rowData.id as string) ?? {}) as TRowDef;
  const stripedConditional = () => (stripedFn(index, rowData) ? 'even' : 'odd');
  return (
    <StyledTableRow
      $even={striped ? stripedConditional() : 'odd'}
      $hide={rowDef?.hide ?? false}
      $highlightRowOnHover={highlightRowOnHoverFn(rowDef) && highlightRowOnHover}
      $striped={striped}
      css={
        typeof rowDef?.style === 'function'
          ? rowDef?.style({
              theme,
              evenOddType: striped && (index + 1) % 2 === 0 ? 'even' : 'odd',
              striped,
            })
          : rowDef?.style
      }
      style={{
        width: `${columnVirtualizer.getTotalSize()}px`,
        height: `${height}px`,
        transform: `translateY(${start}px)`,
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
          colSpan={colDefs.length}
          data={null}
          height={height}
          key={`cell-0`}
          offsetX={0}
          row={rowData}
          rowIndex={index}
          rowDef={rowDef}
          width={columnVirtualizer.getTotalSize()}
        />
      ) : (
        colDefs.map((colDef) => {
          const cellDef = getCellDef(cellDefs, colDef.id, rowDef.id);
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
                rowIndex={index}
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

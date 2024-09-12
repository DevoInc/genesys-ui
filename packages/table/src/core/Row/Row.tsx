import * as React from 'react';
import { VirtualItem, Virtualizer } from '@tanstack/react-virtual';
import { TableContext } from '../../context/TableContext';
import { Cell } from '../Cell';
import { StyledTableRow, type StyledTableRowProps } from './StyledTableRow';
import { getRowDef } from '../../helpers';
import { TStateRow } from '../../declarations';

interface RowProps extends StyledTableRowProps {
  data: { [key: string]: unknown };
  columnVirtualizer: Virtualizer<HTMLDivElement, Element>;
  virtualRow: VirtualItem;
  state?: TStateRow;
}

export const Row: React.FC<RowProps> = ({
  columnVirtualizer,
  data,
  isAfterRow,
  isDragging,
  state = 'enabled',
  virtualRow,
}) => {
  const { striped, colDefs, rowDefs } = React.useContext(TableContext);

  const rowDef = getRowDef(rowDefs, data.id as string);

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
    >
      {rowDef?.cellRenderer ? (
        <Cell
          colDef={{
            id: 'afterRow',
            cellRenderer: rowDef.cellRenderer,
          }}
          height={virtualRow.size}
          key={`cell-0`}
          offsetX={0}
          width={columnVirtualizer.getTotalSize()}
          rowIndex={virtualRow.index}
          row={data}
          data={null}
          colSpan={colDefs.length}
        />
      ) : (
        columnVirtualizer
          .getVirtualItems()
          .map((virtualColumn: VirtualItem) => {
            return (
              <Cell
                colDef={colDefs[virtualColumn.index]}
                data={data[colDefs[virtualColumn.index].id] ?? ''}
                height={virtualRow.size}
                key={`cell-${virtualColumn.key}`}
                offsetX={virtualColumn.start}
                width={virtualColumn.size}
                rowIndex={virtualRow.index}
                row={data}
              />
            );
          })
      )}
    </StyledTableRow>
  );
};

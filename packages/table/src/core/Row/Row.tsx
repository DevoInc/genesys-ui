import * as React from 'react';
import { VirtualItem, Virtualizer } from '@tanstack/react-virtual';
import { TableContext } from '../../context/TableContext';
import { Cell } from '../Cell';
import { StyledTableRow, type StyledTableRowProps } from './StyledTableRow';
import { getRowDef } from './utils';

interface RowProps extends StyledTableRowProps {
  data: { [key: string]: unknown };
  columnVirtualizer: Virtualizer<HTMLDivElement, Element>;
  virtualRow: VirtualItem;
}

export const Row: React.FC<RowProps> = ({
  columnVirtualizer,
  data,
  isAfterRow,
  isDragging,
  state = 'enabled',
  virtualRow,
}) => {
  const { striped, colDefs, rowDefs } =
    React.useContext(TableContext);

  const rowDef = getRowDef(rowDefs, data.id as string);
debugger;
  return rowDef?.cellRenderer ? (
    <StyledTableRow
      $height={`${virtualRow.size}px`}
      $width={`${columnVirtualizer.getTotalSize()}px`}
      transform={`translateY(${virtualRow.start}px)`}
    >
      <Cell
        colDef={{
          id: 'afterRow',
          cellRenderer: rowDef.cellRenderer,
        }}
        data={[]}
        height={virtualRow.size}
        key={`cell-0`}
        offsetX={0}
        width={columnVirtualizer.getTotalSize()}
        rowIndex={virtualRow.index}
      />
    </StyledTableRow>
  ) : (
    <StyledTableRow
      even={(virtualRow.index + 1) % 2 === 0}
      $height={`${virtualRow.size}px`}
      isAfterRow={isAfterRow}
      isDragging={isDragging}
      state={state}
      striped={striped}
      transform={`translateY(${virtualRow.start}px)`}
      $width={`${columnVirtualizer.getTotalSize()}px`}
      display={rowDef?.hide ? 'none' : null}
    >
      {columnVirtualizer.getVirtualItems().map((virtualColumn: VirtualItem) => (
        <Cell
          colDef={colDefs[virtualColumn.index]}
          data={data[colDefs[virtualColumn.index].id] ?? ''}
          height={virtualRow.size}
          key={`cell-${virtualColumn.key}`}
          offsetX={virtualColumn.start}
          width={virtualColumn.size}
          rowIndex={virtualRow.index}
        />
      ))}
    </StyledTableRow>
  );
};

import * as React from 'react';
import { VirtualItem, Virtualizer } from '@tanstack/react-virtual';
import { ColDef } from '../../declarations';
import { Cell } from '../Cell';
import { StyledTableRow, StyledTableRowProps } from './StyledTableRow';
import { TableContext } from '../Table/context';

interface RowProps extends StyledTableRowProps {
  columnDefs: ColDef[];
  data: { [key: string]: unknown };
  columnVirtualizer: Virtualizer<HTMLDivElement, Element>;
  virtualRow: VirtualItem;
}

export const Row: React.FC<RowProps> = ({
  columnDefs,
  columnVirtualizer,
  data,
  isAfterRow,
  isDragging,
  state = 'enabled',
  virtualRow,
}) => {
  const { visualOptions } = React.useContext(TableContext);
  const rowHeight: React.CSSProperties['height'] = `${virtualRow.size}px`;
  return (
    <StyledTableRow
      even={(virtualRow.index + 1) % 2 === 0}
      $height={rowHeight}
      isAfterRow={isAfterRow}
      isDragging={isDragging}
      state={state}
      striped={visualOptions.striped}
      transform={`translateY(${virtualRow.start}px)`}
      $width={`${columnVirtualizer.getTotalSize()}px`}
    >
      {columnVirtualizer.getVirtualItems().map((virtualColumn: VirtualItem) => (
        <Cell
          columnDef={columnDefs[virtualColumn.index]}
          data={data[columnDefs[virtualColumn.index].id] ?? ''}
          height={rowHeight}
          key={`cell-${virtualColumn.key}`}
          offsetX={virtualColumn.start}
          width={`${virtualColumn.size}px`}
        />
      ))}
    </StyledTableRow>
  );
};

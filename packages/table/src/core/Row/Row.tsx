import * as React from 'react';
import { VirtualItem, Virtualizer } from '@tanstack/react-virtual';
import { ColDef } from '../../declarations';
import { Cell } from '../Cell';
import { StyledTableRow, StyledTableRowProps } from './StyledTableRow';
import { TableContext } from '../Table/context';

interface RowProps extends StyledTableRowProps {
  colDefs: ColDef[];
  data: { [key: string]: unknown };
  columnVirtualizer: Virtualizer<HTMLDivElement, Element>;
  virtualRow: VirtualItem;
}

export const Row: React.FC<RowProps> = ({
  colDefs,
  columnVirtualizer,
  data,
  isAfterRow,
  isDragging,
  state = 'enabled',
  virtualRow,
}) => {
  const { visualOptions } = React.useContext(TableContext);
  return (
    <StyledTableRow
      even={(virtualRow.index + 1) % 2 === 0}
      $height={`${virtualRow.size}px`}
      isAfterRow={isAfterRow}
      isDragging={isDragging}
      state={state}
      striped={visualOptions.striped}
      transform={`translateY(${virtualRow.start}px)`}
      $width={`${columnVirtualizer.getTotalSize()}px`}
    >
      {columnVirtualizer.getVirtualItems().map((virtualColumn: VirtualItem) => (
        <Cell
          colDef={colDefs[virtualColumn.index]}
          data={data[colDefs[virtualColumn.index].id] ?? ''}
          height={virtualRow.size}
          key={`cell-${virtualColumn.key}`}
          offsetX={virtualColumn.start}
          width={virtualColumn.size}
        />
      ))}
    </StyledTableRow>
  );
};

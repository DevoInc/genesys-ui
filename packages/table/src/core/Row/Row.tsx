import * as React from 'react';
import { VirtualItem, Virtualizer } from '@tanstack/react-virtual';
import { ColDef, Size } from '../../declarations';
import { Cell } from '../Cell';
import { StyledTableRow, StyledTableRowProps } from './StyledTableRow';
import { TableContext } from '../../context/TableContext';

interface RowProps extends StyledTableRowProps {
  colDefs: ColDef[];
  data: { [key: string]: unknown };
  columnVirtualizer: Virtualizer<HTMLDivElement, Element>;
  virtualRow: VirtualItem;
  wrapperSize: Size;
}

export const Row: React.FC<RowProps> = ({
  colDefs,
  columnVirtualizer,
  data,
  isAfterRow,
  isDragging,
  state = 'enabled',
  virtualRow,
  wrapperSize,
}) => {
  const { striped } = React.useContext(TableContext);
  return (
    <StyledTableRow
      even={(virtualRow.index + 1) % 2 === 0}
      $height={`${virtualRow.size}px`}
      isAfterRow={isAfterRow}
      isDragging={isDragging}
      state={state}
      striped={striped}
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
          wrapperSize={wrapperSize}
        />
      ))}
    </StyledTableRow>
  );
};

import * as React from 'react';
import { VirtualItem, Virtualizer } from '@tanstack/react-virtual';
import { ColDef } from '../../declarations';
import { Cell } from '../Cell';
import { StyledTableRow, StyledTableRowProps } from './StyledTableRow';
import { TableContext } from '../Table/context';

interface RowProps extends StyledTableRowProps {
  columnDefs: ColDef[];
  data: { [key: string]: unknown };
  even?: boolean;
  styles?: React.CSSProperties;
  columnVirtualizer: Virtualizer<HTMLDivElement, Element>;
}

export const Row: React.FC<RowProps> = ({
  columnDefs,
  columnVirtualizer,
  data,
  even,
  isAfterRow,
  isDragging,
  state = 'enabled',
  styles,
}) => {
  const { visualOptions } = React.useContext(TableContext);
  return (
    <StyledTableRow
      even={even}
      $height={styles.height}
      isAfterRow={isAfterRow}
      isDragging={isDragging}
      position={styles.position}
      state={state}
      striped={visualOptions.striped}
      transform={styles.transform}
      $width={styles.width}
    >
      {columnVirtualizer.getVirtualItems().map((virtualColumn: VirtualItem) => (
        <Cell
          columnDef={columnDefs[virtualColumn.index]}
          data={data[columnDefs[virtualColumn.index].id] ?? ''}
          height={styles.height}
          key={`cell-${virtualColumn.key}`}
          offsetX={virtualColumn.start}
          width={`${virtualColumn.size}px`}
        />
      ))}
    </StyledTableRow>
  );
};

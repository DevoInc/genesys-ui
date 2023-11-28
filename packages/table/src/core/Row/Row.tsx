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
  disabled,
  data,
  even,
  expanded,
  highlighted,
  isAfterRow,
  isDragging,
  modified,
  selected,
  styles,
  columnVirtualizer,
}) => {
  const { visualOptions } = React.useContext(TableContext);
  return (
    <StyledTableRow
      disabled={disabled}
      even={even}
      expanded={expanded}
      highlighted={highlighted}
      isAfterRow={isAfterRow}
      isDragging={isDragging}
      modified={modified}
      selected={selected}
      striped={visualOptions.striped}
      position={styles.position}
      width={styles.width}
      height={styles.height}
      transform={styles.transform}
    >
      {columnVirtualizer.getVirtualItems().map((virtualColumn: VirtualItem) => (
        <Cell
          columnDef={columnDefs[virtualColumn.index]}
          key={`cell-${virtualColumn.key}`}
          data={data[columnDefs[virtualColumn.index].id] ?? ''}
          cellWidth={`${virtualColumn.size}px`}
          cellHeight={styles.height}
          offsetX={virtualColumn.start}
        />
      ))}
    </StyledTableRow>
  );
};

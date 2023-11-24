import * as React from 'react';
import { StyledTableRow } from './StyledTableRow';
import { ColDef } from '../../declarations';
import { Cell } from '../Cell';
import { VirtualItem, Virtualizer } from '@tanstack/react-virtual';

interface RowProps {
  columnDefs: ColDef[];
  data: { [key: string]: unknown };
  even: boolean;
  styles?: React.CSSProperties;
  columnVirtualizer: Virtualizer<HTMLDivElement, Element>;
}

export const Row: React.FC<RowProps> = ({
  columnDefs,
  data,
  even,
  styles,
  columnVirtualizer,
}) => {
  return (
    <StyledTableRow
      even={even}
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

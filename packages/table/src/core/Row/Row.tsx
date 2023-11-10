import * as React from 'react';
import { StyledTableRow } from './StyledTableRow';
import { ColDef } from '../../declarations';
import { Cell } from '../Cell';
import { VirtualItem, Virtualizer } from '@tanstack/react-virtual';

interface RowProps {
  columnDefs: ColDef[];
  data: { [key: string]: unknown };
  styles?: React.CSSProperties;
  columnVirtualizer: Virtualizer<undefined, Element>;
}

export const Row: React.FC<RowProps> = ({
  columnDefs,
  data,
  styles,
  columnVirtualizer,
}) => {
  return (
    <StyledTableRow
      position={styles.position}
      width={styles.width}
      height={styles.height}
      transform={styles.transform}
    >
      {columnVirtualizer.getVirtualItems().map((virtualColumn: VirtualItem) => {
        return (
          <Cell
            columnDef={columnDefs[virtualColumn.index]}
            key={`cell-${virtualColumn.key}`}
            data={data[columnDefs[virtualColumn.index].id] ?? ''}
            virtualColumn={virtualColumn}
          />
        );
      })}
    </StyledTableRow>
  );
};

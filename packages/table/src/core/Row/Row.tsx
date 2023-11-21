import * as React from 'react';
import { StyledTableRow } from './StyledTableRow';
import { ColDef } from '../../declarations';
import { Cell } from '../Cell';
import { VirtualItem, Virtualizer } from '@tanstack/react-virtual';
import { getColDefByID } from '../utils';

interface RowProps {
  columnDefs: ColDef[];
  data: { [key: string]: unknown };
  even: boolean;
  styles?: React.CSSProperties;
  columnVirtualizer: Virtualizer<undefined, Element>;
}

export const Row: React.FC<RowProps> = ({
  columnDefs,
  data,
  even,
  styles,
  columnVirtualizer,
}) => {
  const columnsNumber = columnDefs.length;
  return (
    <StyledTableRow
      even={even}
      position={styles.position}
      width={styles.width}
      height={styles.height}
      transform={styles.transform}
    >
      {columnVirtualizer.getVirtualItems().map((virtualColumn: VirtualItem) => {
        const cellWidth = getColDefByID(columnDefs, virtualColumn)?.cellStyle
          ?.width;
        return (
          <Cell
            columnDef={columnDefs[virtualColumn.index]}
            key={`cell-${virtualColumn.key}`}
            data={data[columnDefs[virtualColumn.index].id] ?? ''}
            virtualColumn={virtualColumn}
            cellFlex={
              cellWidth
                ? `1 1 ${cellWidth}%`
                : `1 1 calc(100% / ${columnsNumber})`
            }
            cellWidth={virtualColumn?.size ? `${virtualColumn.size}px` : null}
          />
        );
      })}
    </StyledTableRow>
  );
};

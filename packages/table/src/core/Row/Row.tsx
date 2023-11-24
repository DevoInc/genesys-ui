import * as React from 'react';
import { VirtualItem, Virtualizer } from '@tanstack/react-virtual';
import { ColDef } from '../../declarations';
import { Cell } from '../Cell';
import { getColDefByID } from '../utils';
import { StyledTableRow, StyledTableRowProps } from './StyledTableRow';

interface RowProps extends StyledTableRowProps {
  columnDefs: ColDef[];
  data: { [key: string]: unknown };
  even?: boolean;
  styles?: React.CSSProperties;
  columnVirtualizer: Virtualizer<undefined, Element>;
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
  striped,
  styles,
  columnVirtualizer,
}) => {
  const columnsNumber = columnDefs.length;
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
      striped={striped}
      style={styles}
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

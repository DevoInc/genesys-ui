import * as React from 'react';

import { TableContext } from '../../context/TableContext';
import { StyledTableRow } from './StyledTableRow';
import type { TRowDef } from '../../declarations';
import { useTheme } from 'styled-components';

interface RowProps {
  rowIndex: number;
  width?: number;
  height?: number;
  start?: number;
  children: React.ReactNode;
  rowDef: TRowDef;
  stripe?: 'even' | 'odd';
  striped?: boolean;
}

export const Row: React.FC<RowProps> = ({
  rowIndex,
  width,
  height,
  start,
  children,
  rowDef,
  stripe = 'odd',
  striped = false,
}) => {
  const {
    highlightRowOnHover,
    highlightRowOnHoverFn,
    onRowDoubleClick,
    onRowKeyUp,
    onRowKeyDown,
  } = React.useContext(TableContext);
  const theme = useTheme();

  return (
    <StyledTableRow
      $even={stripe}
      $hide={rowDef?.hide ?? false}
      $highlightRowOnHover={
        highlightRowOnHoverFn?.(rowDef) && highlightRowOnHover
      }
      $striped={striped}
      css={
        typeof rowDef?.style === 'function'
          ? rowDef?.style({
              theme,
              evenOddType: striped && (rowIndex + 1) % 2 === 0 ? 'even' : 'odd',
              striped,
            })
          : rowDef?.style
      }
      style={{
        width: `${width}px`,
        height: `${height}px`,
        transform: `translateY(${start}px)`,
      }}
      aria-rowindex={rowIndex}
      onDoubleClick={() => {
        if (onRowDoubleClick) {
          onRowDoubleClick({ rowDef, rowIndex });
        }
      }}
      onKeyUp={(event) => {
        if (onRowKeyUp) {
          onRowKeyUp({ event, rowDef, rowIndex });
        }
      }}
      onKeyDown={(event) => {
        if (onRowKeyDown) {
          onRowKeyDown({ event, rowDef, rowIndex });
        }
      }}
    >
      {children}
    </StyledTableRow>
  );
};

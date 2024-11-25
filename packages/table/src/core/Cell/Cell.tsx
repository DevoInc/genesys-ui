import * as React from 'react';
import { mergeStyles } from '@devoinc/genesys-ui';

import type { TCellDef, TColDef, TRow, TRowDef } from '../../declarations';

import { TableContext } from '../../context';
import { useInitialState } from '../../editors/useInitialState';

import { StyledCell } from './StyledCell';
import { CellWrapper } from '../../wrapper/CellWrapper';
import { CellEditModeWrapper } from '../../wrapper/CellEditModeWrapper';

interface CellProps {
  cellDef: TCellDef;
  colDef: TColDef;
  colIndex?: number;
  data: unknown;
  height?: number;
  offsetX?: number;
  row: TRow;
  rowDef: TRowDef;
  rowIndex: number;
  width?: number;
}

export const Cell: React.FC<CellProps> = ({
  cellDef,
  colDef,
  colIndex,
  data,
  height,
  offsetX,
  row,
  rowIndex,
  rowDef,
  width,
}) => {
  const {
    onCellMouseEnter,
    onCellMouseLeave,
    onCellDoubleClick,
    onCellKeyUp,
    onCellKeyDown,
    onCellClick,
  } = React.useContext(TableContext);

  useInitialState(data, colDef.onReset);
  const cellRef = React.useRef<HTMLTableCellElement>();
  return (
    <StyledCell
      aria-selected={cellDef?.isEditMode}
      css={mergeStyles(colDef?.style ?? '', cellDef?.style ?? '')}
      ref={cellRef}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        left: `${offsetX}px`,
      }}
      $isHighlighted={colDef?.isHighlighted}
      onMouseEnter={() => {
        if (onCellMouseEnter) {
          onCellMouseEnter({ colDef, cellDef, rowDef });
        }
      }}
      onMouseLeave={() => {
        if (onCellMouseLeave) {
          onCellMouseLeave({ colDef, cellDef, rowDef });
        }
      }}
      aria-colindex={colIndex}
      onClick={(event) => {
        if (onCellClick) {
          onCellClick({ event, colDef, cellDef, rowDef, rowIndex });
        }
      }}
      onDoubleClick={() => {
        if (onCellDoubleClick) {
          onCellDoubleClick({ colDef, cellDef, rowDef, rowIndex });
        }
      }}
      onKeyUp={(event) => {
        if (onCellKeyUp) {
          onCellKeyUp({ event, colDef, cellDef, rowDef, rowIndex });
        }
      }}
      onKeyDown={(event) => {
        if (onCellKeyDown) {
          onCellKeyDown({ event, colDef, cellDef, rowDef, rowIndex });
        }
      }}
      $isSelected={cellDef?.isSelected}
    >
      {colDef.cellWrapper
        ? colDef.cellWrapper({ cellDef, colDef, rowIndex, data, row })
        : colDef.editable
          ? CellEditModeWrapper({ colDef, rowIndex, data, row, cellDef })
          : CellWrapper({ colDef, rowIndex, data, row })}
    </StyledCell>
  );
};

import * as React from 'react';

import { mergeStyles } from '@devoinc/genesys-ui';

import type { TCellDef, TColDef, TRow, TRowDef } from '../../declarations';
import { TableContext } from '../../context';
import { StyledCell } from './StyledCell';
import {
  CellWrapper,
  CellEditModeWrapper,
  CellExpandWrapper,
} from '../../wrapper';

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
    onCellDataChange,
  } = React.useContext(TableContext);
  const cellRef = React.useRef<HTMLTableCellElement>();
  const Wrapper = colDef.cellWrapper
    ? colDef.cellWrapper
    : colDef.editable
      ? CellEditModeWrapper
      : colDef.isExpandable
        ? CellExpandWrapper
        : CellWrapper;
  return (
    <StyledCell
      aria-selected={cellDef?.isSelected}
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
      <Wrapper
        colDef={colDef}
        rowIndex={rowIndex}
        data={data}
        row={row}
        cellDef={cellDef}
        onCellDataChange={onCellDataChange}
      />
    </StyledCell>
  );
};

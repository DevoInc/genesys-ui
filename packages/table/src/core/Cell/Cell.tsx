import * as React from 'react';
import { StyledTableCell } from './StyledTableCell';
import { useRenderContent } from './useRenderContent';
import { ColDef } from '../../declarations';
import { useInitialState } from '../../editors/useInitialState';

interface CellProps {
  data: unknown;
  columnDef: ColDef;
  cellWidth?: React.CSSProperties['width'];
  cellHeight?: React.CSSProperties['height'];
  offsetX?: number;
}

export const Cell: React.FC<CellProps> = ({
  data,
  columnDef,
  cellWidth,
  cellHeight,
  offsetX,
}) => {
  const { onReset } = columnDef;

  useInitialState(data, onReset);

  const { cellRef, editionContent, isEditMode, onDoubleClick, viewContent } =
    useRenderContent(columnDef, data);

  return (
    <StyledTableCell
      onDoubleClick={onDoubleClick}
      ref={cellRef}
      cellWidth={cellWidth}
      offsetX={offsetX}
      height={cellHeight}
    >
      {isEditMode ? editionContent : viewContent}
    </StyledTableCell>
  );
};

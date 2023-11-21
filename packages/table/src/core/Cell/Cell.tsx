import * as React from 'react';
import { StyledTableCell } from './StyledTableCell';
import { useRenderContent } from './useRenderContent';
import { ColDef } from '../../declarations';
import { useInitialState } from '../../editors/useInitialState';
import { VirtualItem } from '@tanstack/react-virtual';

interface CellProps {
  data: unknown;
  columnDef: ColDef;
  cellWidth?: React.CSSProperties['width'];
  cellFlex?: React.CSSProperties['flex'];
  virtualColumn: VirtualItem;
}

export const Cell: React.FC<CellProps> = ({
  data,
  columnDef,
  cellWidth,
  cellFlex,
  virtualColumn,
}) => {
  const { onReset } = columnDef;

  useInitialState(data, onReset);

  const { cellRef, editionContent, isEditMode, onDoubleClick, viewContent } =
    useRenderContent(columnDef, data);

  return (
    <StyledTableCell
      onDoubleClick={onDoubleClick}
      ref={cellRef}
      /*      cellWidth={
        virtualColumn?.size ? `1 1 ${virtualColumn.size}px` : cellWidth
      }*/
      cellWidth={cellWidth}
      cellFlex={cellFlex}
    >
      {isEditMode ? editionContent : viewContent}
    </StyledTableCell>
  );
};

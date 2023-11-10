import * as React from 'react';
import { StyledTableCellWrapper } from './StyledTableCellWrapper';
import { useRenderContent } from './useRenderContent';
import { ColDef } from '../../declarations';
import { useInitialState } from '../../editors/useInitialState';
import { VirtualItem } from '@tanstack/react-virtual';

interface CellProps {
  data: unknown;
  columnDef: ColDef;
  virtualColumn: VirtualItem;
}

export const Cell: React.FC<CellProps> = ({
  data,
  columnDef,
  virtualColumn,
}) => {
  const { onReset } = columnDef;

  useInitialState(data, onReset);

  const { cellRef, editionContent, isEditMode, onDoubleClick, viewContent } =
    useRenderContent(columnDef, data);

  return (
    <StyledTableCellWrapper
      onDoubleClick={onDoubleClick}
      ref={cellRef}
      cellWidth={`${virtualColumn.size}px`}
    >
      {isEditMode ? editionContent : viewContent}
    </StyledTableCellWrapper>
  );
};

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
  virtualRow: VirtualItem;
}

export const Cell: React.FC<CellProps> = ({
  data,
  columnDef,
  virtualColumn,
  virtualRow,
}) => {
  const { onReset } = columnDef;

  useInitialState(data, onReset);

  const { cellRef, editionContent, isEditMode, onDoubleClick, viewContent } =
    useRenderContent(columnDef, data);

  return (
    <StyledTableCellWrapper
      onDoubleClick={onDoubleClick}
      ref={cellRef}
      width={`${virtualColumn.size}px`}
      translateX={virtualColumn.start}
      translateY={virtualRow.start}
    >
      {isEditMode ? editionContent : viewContent}
    </StyledTableCellWrapper>
  );
};

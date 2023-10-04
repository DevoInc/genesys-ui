import * as React from 'react';

import { StyledTableCellWrapper } from './StyledTableCellWrapper';
import { useRenderContent } from './useRenderContent';
import { ColDef } from '../../declarations';
import { useInitialState } from '../../editors/useInitialState';

interface CellProps {
  data: unknown;
  columnDef: ColDef;
}

export const Cell: React.FC<CellProps> = ({ data, columnDef }) => {
  const { onReset } = columnDef;

  useInitialState(data, onReset);

  const { cellRef, editionContent, isEditMode, onDoubleClick, viewContent } =
    useRenderContent(columnDef, data);

  return (
    <StyledTableCellWrapper onDoubleClick={onDoubleClick} ref={cellRef}>
      {isEditMode ? editionContent : viewContent}
    </StyledTableCellWrapper>
  );
};

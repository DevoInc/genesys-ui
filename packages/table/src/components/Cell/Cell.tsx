import * as React from 'react';
import { StyledTableCellWrapper } from './StyledTableCellWrapper';
import { CellData, ColDef } from './declarations';
import { useRenderContent } from './useRenderContent';
import { useInitialState } from './editors/useInitialState';

interface CellProps {
  /** The content for the cell. */
  data?: CellData;
  /** Column definition information for the column that contains the cell. */
  column?: ColDef;
}

export const Cell: React.FC<CellProps> = ({ data, column }) => {
  const {
    CellEditor,
    cellStyle,
    editable,
    expandedRow,
    isDragging,
    onReset,
    tooltipField,
    valueFormatter,
  } = column;
  useInitialState(data, onReset);

  const { cellRef, editionContent, isEditMode, onDoubleClick, viewContent } =
    useRenderContent(CellEditor, column, data, valueFormatter);

  return (
    <StyledTableCellWrapper
      cellStyle={cellStyle}
      editable={editable}
      data-tip={!expandedRow ? tooltipField : null}
      expandedRow={expandedRow}
      onDoubleClick={onDoubleClick}
      isDragging={isDragging}
      ref={cellRef}
    >
      {isEditMode ? editionContent : viewContent}
    </StyledTableCellWrapper>
  );
};

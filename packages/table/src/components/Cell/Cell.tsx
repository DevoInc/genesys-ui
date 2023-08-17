import * as React from 'react';
import { StyledTableCellWrapper } from './StyledTableCellWrapper';
import { ColDef } from './declarations';
import { useRenderContent } from './useRenderContent';

interface CellProps {
  data?: string | number;
  column?: ColDef;
  renderer?: 'default' | 'popper' | 'link' | 'tag' | 'groupTags';
}

export const Cell: React.FC<CellProps> = ({ data, column }) => {
  const {
    expandedRow,
    boxShadow,
    cellStyle,
    minWidth,
    editable,
    type,
    cellEditor,
    tooltipField,
    isDragging,
    valueFormatter,
    context,
  } = column;

  const { content, onClick } = useRenderContent(
    type,
    valueFormatter,
    column,
    data,
    context,
    cellEditor
  );

  return (
    <StyledTableCellWrapper
      cellStyle={cellStyle}
      minWidth={minWidth}
      editable={editable}
      data-tip={!expandedRow ? tooltipField : null}
      expandedRow={expandedRow}
      boxShadow={boxShadow}
      onDoubleClick={onClick}
      isDragging={isDragging}
    >
      {content}
    </StyledTableCellWrapper>
  );
};

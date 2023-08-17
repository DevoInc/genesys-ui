import * as React from 'react';
import { StyledTableCellWrapper } from './StyledTableCellWrapper';
import { ColDef } from './declarations';
import { useRenderContent } from './useRenderContent';
import { useOnEventOutside } from '@devoinc/genesys-ui';

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

  const cellRef = React.useRef(null);

  const { content, onClick, setIsEditMode } = useRenderContent(
    type,
    valueFormatter,
    column,
    data,
    context,
    cellEditor
  );

  useOnEventOutside({
    references: [cellRef],
    handler: () => setIsEditMode(false),
  });

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
      ref={cellRef}
    >
      {content}
    </StyledTableCellWrapper>
  );
};

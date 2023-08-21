import * as React from 'react';
import { StyledTableCellWrapper } from './StyledTableCellWrapper';
import { CellData, ColDef } from './declarations';
import { useRenderContent } from './useRenderContent';
import { useOnEventOutside } from '@devoinc/genesys-ui';

interface CellProps {
  data?: CellData;
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
    CellEditor,
    tooltipField,
    isDragging,
    valueFormatter,
    context,
  } = column;

  const cellRef = React.useRef(null);

  const { editionContent, viewContent, isEditMode, onClick, setIsEditMode } =
    useRenderContent(CellEditor, column, context, data, type, valueFormatter);

  useOnEventOutside({
    references: [cellRef, editionContent, viewContent],
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
      {isEditMode ? editionContent : viewContent}
    </StyledTableCellWrapper>
  );
};

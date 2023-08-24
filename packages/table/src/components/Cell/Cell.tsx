import * as React from 'react';
import { StyledTableCellWrapper } from './StyledTableCellWrapper';
import { CellData, ColDef } from './declarations';
import { useRenderContent } from './useRenderContent';
import { useOnEventOutside } from '@devoinc/genesys-ui';
import { ColumnType } from '../declarations';
import { useInitialState } from './editors/useInitialState';

interface CellProps {
  data?: CellData;
  column?: ColDef;
  renderer?: ColumnType;
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
    onReset,
  } = column;

  const cellRef = React.useRef(null);
  useInitialState(data, onReset);

  const { editionContent, viewContent, isEditMode, onClick, setIsEditMode } =
    useRenderContent(CellEditor, column, data, type, valueFormatter);

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

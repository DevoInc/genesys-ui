import * as React from 'react';
import { StyledTableCellWrapper } from './StyledTableCellWrapper';
import { getRenderer } from './cellRenderer';
import { ColDef } from './declarations';
import { EditInput } from './editCell';

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
  const renderContent = getRenderer(type);

  const renderWithoutEditing = () =>
    renderContent({
      value: valueFormatter ? valueFormatter(data, context) : data,
      columnDef: column,
    });

  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);
  const [content, setContent] = React.useState<
    string | number | React.ReactNode
  >(renderWithoutEditing());

  const renderEditionCell = (): React.ReactNode =>
    cellEditor ? cellEditor(data) : EditInput(data);

  const onClick = () => {
    if (column.editable && !isEditMode) {
      setIsEditMode(true);
      setContent(renderEditionCell());
    }
  };

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

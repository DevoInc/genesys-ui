import * as React from 'react';
import { EditText } from './editors';
import { getRenderer } from './renderers';
import { CellData, ColDef } from './declarations';

export const useRenderContent = (
  cellEditor: () => React.ReactNode,
  columnDef: ColDef,
  data: CellData,
  valueFormatter: (value: CellData) => void
) => {
  const renderContent = getRenderer(columnDef.type);

  const viewContent = renderContent({
    value: valueFormatter ? valueFormatter(data) : data,
    columnDef,
  });

  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);

  const editionContent = cellEditor?.() ?? EditText({ value: data });

  const onDoubleClick = () => setIsEditMode(columnDef.editable && !isEditMode);

  return {
    editionContent,
    viewContent,
    onDoubleClick,
    isEditMode,
    setIsEditMode,
  };
};

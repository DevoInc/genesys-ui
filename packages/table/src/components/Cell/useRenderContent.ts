import * as React from 'react';
import { EditText } from './editors';
import { getRenderer } from './renderers';
import { ColumnType } from '../declarations';
import { CellData, ColDef } from './declarations';

export const useRenderContent = (
  cellEditor: () => React.ReactNode,
  columnDef: ColDef,
  data: CellData,
  type: ColumnType,
  valueFormatter: (value: CellData) => void
) => {
  const renderContent = getRenderer(type);

  const viewContent = renderContent({
    value: valueFormatter ? valueFormatter(data) : data,
    columnDef,
  });

  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);

  const editionContent = cellEditor?.() ?? EditText({ value: data });

  const onClick = () => setIsEditMode(columnDef.editable && !isEditMode);

  return {
    editionContent,
    viewContent,
    onClick,
    isEditMode,
    setIsEditMode,
  };
};

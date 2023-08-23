import * as React from 'react';
import { EditInput } from './editors';
import { getRenderer } from './renderers';
import { ColumnType } from '../declarations';
import {
  CellData,
  CellEditorProps,
  ColDef,
  Context,
  ValueFormatter,
} from './declarations';

export const useRenderContent = (
  cellEditor: React.FC<CellEditorProps>,
  columnDef: ColDef,
  context: Context,
  data: CellData,
  type: ColumnType,
  valueFormatter: ValueFormatter
) => {
  const renderContent = getRenderer(type);

  const viewContent = renderContent({
    value: valueFormatter ? valueFormatter(data, context) : data,
    columnDef,
  });

  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);

  const editionContent = cellEditor
    ? cellEditor({ value: data, onChange: columnDef.onChange })
    : EditInput({ value: data.toString() });

  const onClick = () => setIsEditMode(columnDef.editable && !isEditMode);

  return {
    editionContent,
    viewContent,
    onClick,
    isEditMode,
    setIsEditMode,
  };
};

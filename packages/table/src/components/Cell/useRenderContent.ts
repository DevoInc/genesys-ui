import * as React from 'react';
import { EditInput } from './editCell/EditInput';
import { getRenderer } from './cellRenderer';
import { ColumnTypeCombinerType } from '../declarations';
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
  type: ColumnTypeCombinerType,
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
    : EditInput({ value: data });

  const onClick = () => setIsEditMode(columnDef.editable && !isEditMode);

  return {
    editionContent,
    viewContent,
    onClick,
    isEditMode,
    setIsEditMode,
  };
};

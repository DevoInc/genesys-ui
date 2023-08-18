import * as React from 'react';
import { EditInput } from './editCell/EditInput';
import { getRenderer } from './cellRenderer';
import { ColumnTypeCombinerType } from '../declarations';
import { CellEditor, ColDef, Context, ValueFormatter } from './declarations';

export const useRenderContent = (
  cellEditor: CellEditor,
  columnDef: ColDef,
  context: Context,
  data: string | number,
  type: ColumnTypeCombinerType,
  valueFormatter: ValueFormatter
) => {
  const renderContent = getRenderer(type);

  const renderWithoutEditing = () =>
    renderContent({
      value: valueFormatter ? valueFormatter(data, context) : data,
      columnDef,
    });

  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);
  const [content, setContent] = React.useState<
    string | number | React.ReactNode
  >(renderWithoutEditing());

  const renderEditionCell = (): React.ReactNode =>
    cellEditor ? cellEditor(data) : EditInput(data);

  const onClick = () => setIsEditMode(columnDef.editable && !isEditMode);

  React.useEffect(
    () => setContent(isEditMode ? renderEditionCell() : renderWithoutEditing()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isEditMode]
  );

  return {
    isEditMode,
    content,
    onClick,
    setIsEditMode,
  };
};

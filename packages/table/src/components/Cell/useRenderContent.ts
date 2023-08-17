import * as React from 'react';
import { EditInput } from './editCell/EditInput';
import { getRenderer } from './cellRenderer';
import { ColumnTypeCombinerType } from '../declarations';
import { CellEditor, ColDef, Context, ValueFormatter } from './declarations';

export const useRenderContent = (
  type: ColumnTypeCombinerType,
  valueFormatter: ValueFormatter,
  columnDef: ColDef,
  data: string | number,
  context: Context,
  cellEditor: CellEditor
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

  const onClick = () => {
    if (columnDef.editable && !isEditMode) {
      setIsEditMode(true);
      setContent(renderEditionCell());
    }
  };

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

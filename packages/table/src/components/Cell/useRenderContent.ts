import * as React from 'react';
import { useOnEventOutside } from '@devoinc/genesys-ui';
import { EditText } from './editors';
import { getRenderer } from './renderers';
import { CellData, ColDef } from './declarations';

export const useRenderContent = (
  cellEditor: () => React.ReactNode,
  columnDef: ColDef,
  data: CellData,
  valueFormatter: (value: CellData) => void,
) => {
  const cellRef = React.useRef(null);
  const renderContent = getRenderer(columnDef.type);

  const viewContent = renderContent({
    value: valueFormatter ? valueFormatter(data) : data,
    columnDef,
  });

  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);

  const editionContent = cellEditor?.() ?? EditText({ value: data });

  const onDoubleClick = () => setIsEditMode(columnDef.editable);

  useOnEventOutside({
    references: [cellRef, editionContent, viewContent],
    handler: () => setIsEditMode(false),
  });

  return {
    cellRef,
    editionContent,
    viewContent,
    onDoubleClick,
    isEditMode,
    setIsEditMode,
  };
};

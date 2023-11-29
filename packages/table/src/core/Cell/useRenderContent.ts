import * as React from 'react';
import { useOnEventOutside } from '@devoinc/genesys-ui';

import { ColDef } from '../../declarations';

export const useRenderContent = (columnDef: ColDef, data: unknown) => {
  const cellRef = React.useRef(null);

  const viewContent = columnDef.CellRenderer({
    value: columnDef.valueFormatter
      ? columnDef.valueFormatter(data, columnDef.context)
      : data,
    columnDef,
  });

  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);

  const editionContent = columnDef.CellEditor
    ? columnDef.CellEditor({
        value: data,
        onChange: columnDef.cellRendererConfig?.onChange,
      })
    : null;

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

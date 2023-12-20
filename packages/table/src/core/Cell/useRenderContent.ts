import * as React from 'react';
import { useOnEventOutside } from '@devoinc/genesys-ui';

import { ColDef } from '../../declarations';

export const useRenderContent = (columnDef: ColDef, data: unknown) => {
  const cellRef = React.useRef<HTMLTableCellElement>();

  const viewContent = React.useMemo(
    () =>
      columnDef.cellRenderer
        ? columnDef.cellRenderer({
            value: columnDef.valueFormatter
              ? columnDef.valueFormatter(data, columnDef.context)
              : data,
            columnDef,
          })
        : '',
    [columnDef, data],
  );

  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);

  const editionContent = columnDef.cellEditor
    ? columnDef.cellEditor({
        value: data,
        onChange: columnDef.cellRendererConfig?.onChange,
      })
    : null;

  const onDoubleClick = React.useCallback(
    () => setIsEditMode(columnDef.editable),
    [columnDef.editable],
  );

  useOnEventOutside({
    references: [cellRef, editionContent, viewContent],
    handler: () => {
      setIsEditMode(false);
    },
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

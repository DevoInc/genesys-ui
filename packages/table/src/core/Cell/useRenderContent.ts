import * as React from 'react';

import { useOnEventOutside } from '@devoinc/genesys-ui';

import type { TColDef } from '../../declarations';

export const useRenderContent = (
  colDef: TColDef,
  data: unknown,
  rowIndex: number,
  rowVirtualizer,
  virtualRow,
  rowDef
) => {
  const cellRef = React.useRef<HTMLTableCellElement>();

  const viewContent = colDef.cellRenderer
    ? colDef.cellRenderer({
        value: colDef.valueFormatter
          ? colDef.valueFormatter(data, colDef.context)
          : data,
        colDef,
        rowIndex,
        rowVirtualizer,
        virtualRow,
        rowDef
      })
    : '';

  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);

  const editionContent = colDef.cellEditor
    ? colDef.cellEditor({
        value: data,
        colDef,
        rowIndex,
      })
    : null;

  const onDoubleClick = React.useCallback(
    () => setIsEditMode(colDef.editable),
    [colDef.editable],
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

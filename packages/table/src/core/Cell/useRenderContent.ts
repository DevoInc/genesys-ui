import * as React from 'react';

import { useOnEventOutside } from '@devoinc/genesys-ui';

import { ColDef } from '../../declarations';

export const useRenderContent = (
  colDef: ColDef,
  data: unknown,
  rowIndex: number,
) => {
  const cellRef = React.useRef<HTMLTableCellElement>();

  const viewContent = colDef.cellRenderer
    ? colDef.cellRenderer({
      value: colDef.valueFormatter
        ? colDef.valueFormatter(data, colDef.context)
        : data,
      colDef,
      rowIndex,
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

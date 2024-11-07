import * as React from 'react';

import { useOnEventOutside } from '@devoinc/genesys-ui';

import type { TColDef, TRow } from '../../declarations';
import { TableContext } from '../../context';

export const useRenderContent = (
  colDef: TColDef,
  data: unknown,
  rowIndex: number,
  row: TRow,
) => {
  const { onCellDataChange } = React.useContext(TableContext);
  const cellRef = React.useRef<HTMLTableCellElement>();

  const viewContent = colDef.cellRenderer
    ? colDef.cellRenderer({
        value: colDef.valueFormatter
          ? colDef.valueFormatter(data, colDef.context)
          : data,
        colDef,
        rowIndex,
        row,
      })
    : '';

  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);

  const editionContent = colDef.cellEditor
    ? colDef.cellEditor({
        value: data,
        colDef,
        onChange: (value) => {
          onCellDataChange({ colDef, value, rowIndex });
        },
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

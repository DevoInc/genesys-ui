import * as React from 'react';
import { useClickAway } from 'ahooks';

import type { TColDef, TRow, TRowDef } from '../../declarations';
import { TableContext } from '../../context';

export const useRenderContent = (
  colDef: TColDef,
  data: unknown,
  rowIndex: number,
  row: TRow,
  rowDef: TRowDef,
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
        rowDef,
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

  useClickAway(() => {
    setIsEditMode(false);
  }, [cellRef]);

  return {
    cellRef,
    editionContent,
    viewContent,
    onDoubleClick,
    isEditMode,
    setIsEditMode,
  };
};

import * as React from 'react';

import { TCellDef } from '../declarations';
import {
  isEditModeCellDef,
  selectedCellDef,
  updatedCellDef,
} from '../helpers/cellDefs';

export const useCellDefs = (cellDefs) => {
  const [newCellDefs, setCellDefs] = React.useState<TCellDef[]>(cellDefs);

  const updatedCellDefs = (colDefId, rowDefId, rowIndex) => {
    setCellDefs(
      updatedCellDef(newCellDefs, {
        colId: colDefId,
        rowId: rowDefId || String(rowIndex),
        isSelected: true,
      }),
    );
  };

  const selectedCells = ({ event, colDef, rowDef, rowIndex }) => {
    !event.ctrlKey
      ? setCellDefs(
          selectedCellDef(newCellDefs, {
            colId: colDef.id,
            rowId: rowDef.id || String(rowIndex),
          }),
        )
      : updatedCellDefs(colDef.id, rowDef.id, rowIndex);
  };

  const setEditModeCell = ({ colDef, rowDef, rowIndex }) => {
    setCellDefs(
      isEditModeCellDef(newCellDefs, {
        rowId: rowDef.id || String(rowIndex),
        colId: colDef.id,
      }),
    );
  };

  const cancellAllEditModeCell = () => {
    debugger;
    setCellDefs(
      newCellDefs.map((cell) => {
        debugger;
        return { ...cell, isEditMode: false };
      }),
    );
  };

  const setKeyEditModeCell = ({ event, key, colDef, rowDef, rowIndex }) => {
    if (event.key === key) {
      setEditModeCell({ colDef, rowDef, rowIndex });
    }
  };

  return {
    newCellDefs,
    updatedCellDefs,
    selectedCells,
    setEditModeCell,
    cancellAllEditModeCell,
    setKeyEditModeCell,
    setCellDefs,
  };
};

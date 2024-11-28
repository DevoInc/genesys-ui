import { TCellDef } from '../../declarations';

import { existCellDef } from './existCellDef';

export const isEditModeCellDef = (cellDefs: TCellDef[], cellDef: TCellDef) =>
  existCellDef(cellDefs, cellDef)
    ? cellDefs.map((cell) => {
        if (cell.colId === cellDef.colId && cell.rowId === cellDef.rowId) {
          return { ...cell, ...cellDef, isEditMode: true };
        } else {
          return { ...cell, isEditMode: false };
        }
      })
    : cellDefs
        .map((cell) => {
          return { ...cell, isEditMode: false };
        })
        .concat({ ...cellDef, isEditMode: true });
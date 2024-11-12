import { TCellDef } from '../../declarations';

import { existCellDef } from './existCellDef';

export const selectedCellDef = (cellDefs: TCellDef[], cellDef: TCellDef) =>
  existCellDef(cellDefs, cellDef)
    ? cellDefs.map((cell) => {
        if (cell.colId === cellDef.colId && cell.rowId === cellDef.rowId) {
          return { ...cell, ...cellDef, isSelected: true, isEditMode: false };
        } else {
          return { ...cell, isSelected: false, isEditMode: false };
        }
      })
    : cellDefs
        .map((cell) => {
          return { ...cell, isSelected: false, isEditMode: false };
        })
        .concat({ ...cellDef, isSelected: true, isEditMode: false });

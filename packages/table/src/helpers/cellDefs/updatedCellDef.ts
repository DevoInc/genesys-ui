import { TCellDef } from '../../declarations';

import { existCellDef } from './existCellDef';

export const updatedCellDef = (cellDefs: TCellDef[], cellDef: TCellDef) =>
  existCellDef(cellDefs, cellDef)
    ? cellDefs.map((cell) => {
        if (cell.colId === cellDef.colId && cell.rowId === cellDef.rowId) {
          return { ...cell, ...cellDef };
        } else {
          return cell;
        }
      })
    : [...cellDefs, cellDef];

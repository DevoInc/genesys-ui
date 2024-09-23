import type { TCellDef } from '../../declarations';

export const getCellDef = (
  cellDefs: TCellDef[],
  colId: string,
  rowId: string,
) => cellDefs?.find((cell) => cell.colId === colId && cell.rowId === rowId);

import type { TColDef } from '../../../declarations';

export const getRowHeightFromColDefs = (colDefs: TColDef[]) =>
  colDefs.reduce(
    (prev: number, col) => (col?.rowHeight > prev ? col.rowHeight : prev),
    0,
  ) || undefined;

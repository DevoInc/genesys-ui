import type { TCellDef, TColDef, TRow } from "../declarations";

export type TCellWrapper = {
  colDef: TColDef;
  rowIndex: number;
  row: TRow;
  cellDef: TCellDef;
  data: unknown;
  context?: {
    [key: string]: unknown;
  };
  onCellDataChange: ({ colDef, value, rowIndex }) => void;
};


export const existHeaderCellDef = (headerCellDefs, headerCellDef) =>
  headerCellDefs.find((headerCell) => headerCell.colId === headerCellDef.colId);

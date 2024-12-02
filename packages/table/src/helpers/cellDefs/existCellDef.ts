export const existCellDef = (cellDefs, cellDef) =>
  !!cellDefs.find(
    (cell) => cell.colId === cellDef.colId && cell.rowId === cellDef.rowId,
  );

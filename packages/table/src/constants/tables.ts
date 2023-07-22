export const getZindexMap = (theme) => {
  const tableTokens = theme.tokens.cmp.table;
  return {
    afterRow: tableTokens.row.elevation.zIndex.isAfterRow,
    expanded: tableTokens.cellExpandedWrapper.elevation.zIndex,
    columnHighlight: tableTokens.cell.elevation.zIndex.columnHighlight,
    head: tableTokens.head.elevation.zIndex,
  };
};

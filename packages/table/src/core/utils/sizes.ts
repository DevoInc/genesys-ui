import { Brand } from '@devoinc/genesys-tokens-types';

/**
 * Returns an object with z-index values for several elements of the table based in design tokens
 *
 * @param theme Object with the design tokens
 * @return Object with the z-index values
 */
export const getTableZIndexMap = (theme: Brand) => {
  const tableTokens = theme.cmp.table;
  return {
    afterRow: tableTokens.row.elevation.zIndex.isAfterRow,
    expanded: tableTokens.cellExpandedWrapper.elevation.zIndex,
    columnHighlight: tableTokens.cell.elevation.zIndex.columnHighlight,
    head: tableTokens.head.elevation.zIndex,
  };
};

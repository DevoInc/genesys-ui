import { Brand } from '@devoinc/genesys-tokens-types';
import { Density, SizesConfig } from '../../declarations';
import { getPxFromRem } from '@devoinc/genesys-ui';
import { TableBodyProps } from '../TableBody';

/**
 * Returns the evaluated height of the table based in the virtualization
 */
export const getTableEvalHeight = (
  tableBodyHeight: TableBodyProps['height'],
) => (tableBodyHeight !== 0 ? `${tableBodyHeight}px` : 'auto');

/**
 * Returns the evaluated width of the table based in the virtualization
 */
export const getTableEvalWidth = (tableBodyWidth: TableBodyProps['width']) =>
  tableBodyWidth !== 0 ? `${tableBodyWidth}px` : '100%';

/**
 * Returns an object with size values based in design tokens and display density
 */
export const getSizes = (theme: Brand, density: Density): SizesConfig => {
  const headTokens = theme.cmp.table.head;
  const rowTokens = theme.cmp.table.row;
  const cellTokens = theme.cmp.table.cell;
  return {
    head: { height: getPxFromRem(headTokens.size.height[density]) },
    row: {
      height: {
        md: getPxFromRem(rowTokens.size.height[density].md),
        lg: getPxFromRem(rowTokens.size.height[density].lg),
        xl: getPxFromRem(rowTokens.size.height[density].xl),
        xxl: getPxFromRem(rowTokens.size.height[density].xxl),
        xxxl: getPxFromRem(rowTokens.size.height[density].xxxl),
      },
    },
    cell: {
      horPad: getPxFromRem(cellTokens.space.padding.hor[density]),
      verPad: getPxFromRem(cellTokens.space.padding.ver[density].base),
    },
  };
};

/**
 * Returns an object with z-index values for several elements of the table based in design tokens
 *
 * @param {Object} theme Object with the design tokens
 * @return {Object} Object with the z-index values
 */
export const getTableZIndexMap = (theme) => {
  const tableTokens = theme.cmp.table;
  return {
    afterRow: tableTokens.row.elevation.zIndex.isAfterRow,
    expanded: tableTokens.cellExpandedWrapper.elevation.zIndex,
    columnHighlight: tableTokens.cell.elevation.zIndex.columnHighlight,
    head: tableTokens.head.elevation.zIndex,
  };
};

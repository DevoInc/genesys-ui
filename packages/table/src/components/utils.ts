import { Table } from '@devoinc/genesys-brand-devo/dist/light/js';
import { baseFs, DENSITY } from './constants';
import { RowSizes } from './declarations';

/**
 * Returns the size number in px without units
 */
const getPxFromRem = (remSize: string): number => {
  const isRemUnit = remSize.indexOf('rem') > -1;
  return parseFloat(remSize) * (isRemUnit ? baseFs : 1);
};

/**
 * Returns an object with size values based in design tokens and display density
 */
export const getSizes = (tokens: Table | Table): RowSizes => {
  const cellTokens = tokens.cell;
  const cellWrapperTokens = tokens.cellWrapper;
  const headTokens = tokens.head;
  const rowTokens = tokens.row;
  return {
    head: { height: getPxFromRem(headTokens.size.height[DENSITY.DEFAULT]) },
    row: {
      height: {
        md: getPxFromRem(rowTokens.size.height[DENSITY.DEFAULT].md),
        lg: getPxFromRem(rowTokens.size.height[DENSITY.DEFAULT].lg),
        xl: getPxFromRem(rowTokens.size.height[DENSITY.DEFAULT].xl),
        xxl: getPxFromRem(rowTokens.size.height[DENSITY.DEFAULT].xxl),
        xxxl: getPxFromRem(rowTokens.size.height[DENSITY.DEFAULT].xxxl),
      },
      br: getPxFromRem(rowTokens.shape.borderRadius[DENSITY.DEFAULT]),
    },
    cell: {
      horPad: getPxFromRem(cellTokens.space.padding.hor[DENSITY.DEFAULT]),
      verPad: getPxFromRem(cellTokens.space.padding.ver[DENSITY.DEFAULT].base),
      verPadTall: getPxFromRem(
        cellTokens.space.padding.ver[DENSITY.DEFAULT].tall
      ),
    },
    afterRow: {
      horPad: getPxFromRem(
        cellWrapperTokens.space.padding.hor[DENSITY.DEFAULT].afterRow
      ),
      verPad: getPxFromRem(
        cellWrapperTokens.space.padding.ver[DENSITY.DEFAULT].afterRow
      ),
    },
    expanded: {
      horPad: getPxFromRem(
        cellWrapperTokens.space.padding.hor[DENSITY.DEFAULT].expanded
      ),
      verPad: getPxFromRem(
        cellWrapperTokens.space.padding.ver[DENSITY.DEFAULT].expanded
      ),
    },
    expandedLg: {
      horPad: getPxFromRem(
        cellWrapperTokens.space.padding.hor[DENSITY.DEFAULT].expandedLg
      ),
      verPad: getPxFromRem(
        cellWrapperTokens.space.padding.ver[DENSITY.DEFAULT].expandedLg
      ),
    },
  };
};

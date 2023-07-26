const DENSITY = {
  DEFAULT: 'default',
  COMPACT: 'compact',
  COMFORTABLE: 'comfortable',
};

//NOTE: We define the default value as "10px", as this is the value obtained from devo.com website while executing the query
const baseFs =
  typeof window !== 'undefined'
    ? parseInt(window.getComputedStyle(document.documentElement).fontSize, 10)
    : 10;

/**
 * Returns the size number in px without units
 *
 * @param {String} remSize The size value: 2rem, 4.8rem... etc.
 * @return {Number} the size in px number value (in base 10): 20, 48... etc.
 */
const getPxFromRem = (remSize) => {
  const isRemUnit = remSize.indexOf('rem') > -1;
  return parseFloat(remSize) * (isRemUnit ? baseFs : 1);
};

export const getZindexMap = (theme) => {
  const tableTokens = theme.tokens.cmp.table;
  return {
    afterRow: tableTokens.row.elevation.zIndex.isAfterRow,
    expanded: tableTokens.cellExpandedWrapper.elevation.zIndex,
    columnHighlight: tableTokens.cell.elevation.zIndex.columnHighlight,
    head: tableTokens.head.elevation.zIndex,
  };
};

/**
 * Returns an object with size values based in design tokens and display density
 *
 * @param {String} density The display density of the Table
 * @param {Object} tokens Object with the design tokens
 * @return {Object} Object with the sizes
 */
const getSizesObj = ({ density = DENSITY.DEFAULT, tokens }) => {
  const cellTokens = tokens.cell;
  const cellWrapperTokens = tokens.cellWrapper;
  const headTokens = tokens.head;
  const rowTokens = tokens.row;
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
      br: getPxFromRem(rowTokens.shape.borderRadius[density]),
    },
    cell: {
      horPad: getPxFromRem(cellTokens.space.padding.hor[density]),
      verPad: getPxFromRem(cellTokens.space.padding.ver[density].base),
      verPadTall: getPxFromRem(cellTokens.space.padding.ver[density].tall),
    },
    afterRow: {
      horPad: getPxFromRem(
        cellWrapperTokens.space.padding.hor[density].afterRow
      ),
      verPad: getPxFromRem(
        cellWrapperTokens.space.padding.ver[density].afterRow
      ),
    },
    expanded: {
      horPad: getPxFromRem(
        cellWrapperTokens.space.padding.hor[density].expanded
      ),
      verPad: getPxFromRem(
        cellWrapperTokens.space.padding.ver[density].expanded
      ),
    },
    expandedLg: {
      horPad: getPxFromRem(
        cellWrapperTokens.space.padding.hor[density].expandedLg
      ),
      verPad: getPxFromRem(
        cellWrapperTokens.space.padding.ver[density].expandedLg
      ),
    },
  };
};

export const getSizes = (density, tokens) =>
  getSizesObj({ density: density || DENSITY.DEFAULT, tokens });

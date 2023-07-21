import { getPxFromRem } from '@devoinc/genesys-ui';

export const COLUMN_TYPE = {
  BOOLEAN: 'boolean',
  CUSTOM: 'custom',
  DATE: 'date',
  LINK: 'link',
  LONG_TEXT: 'longText',
  NUMBER: 'number',
  STATUS: 'status',
  TAGS: 'tags',
  TEXT: 'text',
  // TODO
  //DATE_RANGE: 'dateRange',
  //STATUS_MESSAGE: 'statusMessage',
} as const;

const DENSITY = {
  DEFAULT: 'default',
  COMPACT: 'compact',
  COMFORTABLE: 'comfortable',
} as const;

type density = 'default' | 'compact' | 'comfortable';

type sizesObj = {
  density: density;
  tokens: any;
};

/**
 * Returns an object with size values based in design tokens and display density
 *
 * @param {String} density The display density of the Table
 * @param {Object} tokens Object with the design tokens
 * @return {Object} Object with the sizes
 */
export const getSizesObj = ({
  density = DENSITY.DEFAULT,
  tokens,
}: sizesObj) => {
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

export const getFixedSizesObj = (tokens) => {
  const filterTokens = tokens.filter;
  const filterColumnsCellTokens = tokens.filterColumnsCell;
  const cellActionsTokens = tokens.cellActions;
  const cellQuickActionsTokens = tokens.cellQuickActions;
  return {
    filter: {
      verPad: getPxFromRem(filterTokens.space.padding.ver),
      horPad: getPxFromRem(filterTokens.space.padding.hor),
    },
    filterColumnsCell: {
      horPad: getPxFromRem(filterColumnsCellTokens.space.padding.hor),
    },
    cellActions: {
      spacing: getPxFromRem(cellActionsTokens.space.marginHor),
      actionSize: getPxFromRem(cellActionsTokens.size.width),
    },
    actions: {
      spacing: getPxFromRem(cellQuickActionsTokens.space.gap),
      actionWidth: getPxFromRem(cellQuickActionsTokens.size.width),
    },
  };
};

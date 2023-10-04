import { Brand } from '@devoinc/genesys-tokens-types';

export const DENSITY = {
  DEFAULT: 'default',
  COMPACT: 'compact',
  COMFORTABLE: 'comfortable',
};

interface RowSizes {
  head: { height: number };
  row: {
    height: {
      md: number;
      lg: number;
      xl: number;
      xxl: number;
      xxxl: number;
    };
    br: number;
  };
  cell: {
    horPad: number;
    verPad: number;
    verPadTall: number;
  };
  afterRow: {
    horPad: number;
    verPad: number;
  };
  expanded: {
    horPad: number;
    verPad: number;
  };
  expandedLg: {
    horPad: number;
    verPad: number;
  };
}

/**
 * Returns an object with size values based in design tokens and display density
 */
export const getSizes = (tokens: Brand['cmp']['table']): RowSizes => {
  const cellTokens = tokens.cell;
  const cellWrapperTokens = tokens.cellWrapper;
  const headTokens = tokens.head;
  const rowTokens = tokens.row;
  return {
    head: { height: headTokens.size.height[DENSITY.DEFAULT] },
    row: {
      height: {
        md: rowTokens.size.height[DENSITY.DEFAULT].md,
        lg: rowTokens.size.height[DENSITY.DEFAULT].lg,
        xl: rowTokens.size.height[DENSITY.DEFAULT].xl,
        xxl: rowTokens.size.height[DENSITY.DEFAULT].xxl,
        xxxl: rowTokens.size.height[DENSITY.DEFAULT].xxxl,
      },
      br: rowTokens.shape.borderRadius[DENSITY.DEFAULT],
    },
    cell: {
      horPad: cellTokens.space.padding.hor[DENSITY.DEFAULT],
      verPad: cellTokens.space.padding.ver[DENSITY.DEFAULT].base,
      verPadTall: cellTokens.space.padding.ver[DENSITY.DEFAULT].tall,
    },
    afterRow: {
      horPad: cellWrapperTokens.space.padding.hor[DENSITY.DEFAULT].afterRow,
      verPad: cellWrapperTokens.space.padding.ver[DENSITY.DEFAULT].afterRow,
    },
    expanded: {
      horPad: cellWrapperTokens.space.padding.hor[DENSITY.DEFAULT].expanded,
      verPad: cellWrapperTokens.space.padding.ver[DENSITY.DEFAULT].expanded,
    },
    expandedLg: {
      horPad: cellWrapperTokens.space.padding.hor[DENSITY.DEFAULT].expandedLg,
      verPad: cellWrapperTokens.space.padding.ver[DENSITY.DEFAULT].expandedLg,
    },
  };
};

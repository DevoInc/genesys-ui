import { Brand } from '@devoinc/genesys-tokens-types';
import { Density, MeasuresConfig } from '../../declarations';
import { getPxFromRem } from '@devoinc/genesys-ui';

/**
 * Returns an object with size values based in design tokens and display density
 */
export const getMeasures = (theme: Brand, density: Density): MeasuresConfig => {
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

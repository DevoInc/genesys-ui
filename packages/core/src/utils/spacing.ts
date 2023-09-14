import { DefaultTheme } from 'styled-components';
import { GLOBAL_SPACING } from '../constants/spacing';

/**
 * Get the map with spacing prop alias values and prop css values (tokens)
 * based in the theme object.
 */
export const getSpacingValuesMap = (theme: DefaultTheme) => {
  const spacingTks = theme.alias.space;
  return Object.fromEntries(
    GLOBAL_SPACING.map((valueName) => {
      const hyphenPos = valueName.indexOf('-');
      const type = valueName.substring(0, hyphenPos);
      const size = valueName.substring(hyphenPos + 1, valueName.length);
      if (valueName === '0' || valueName === 'auto' || valueName === 'inherit')
        return [valueName, valueName];
      const spacingTk = spacingTks[type];
      return [valueName, spacingTk[size]];
    }),
  );
};

/**
 * Get the spacing value translated into css units
 * cmp-md -> Xrem, ...
 * could be composed as: 'cmp-md cmp-md' for margin or padding attributes (for
 * example)
 */
export const getSpacingPropCss = (theme: DefaultTheme) => (spacing: string) => {
  const valuesArr = spacing?.split(' ');
  const cssValuesArr = valuesArr?.map((val) => getSpacingValuesMap(theme)[val]);
  return cssValuesArr?.join(' ');
};

import { DefaultTheme } from 'styled-components';
import { GLOBAL_SPACING } from '../constants/spacing';

/**
 * Get the map with spacing prop alias values and prop css values (tokens)
 * based in the theme object.
 */
export const getSpacingValuesMap = (theme: DefaultTheme) => {
  const spacingTks = theme.tokens.alias.space;
  return Object.fromEntries(
    GLOBAL_SPACING.map((valueName) => {
      const hyphenPos = valueName.indexOf('-');
      const type = valueName.substring(0, hyphenPos);
      const size = valueName.substring(hyphenPos + 1, valueName.length);
      if (valueName === '0' || valueName === 'auto' || valueName === 'inherit')
        return [valueName, valueName];
      const spacingTk = spacingTks[type];
      return [valueName, spacingTk[size]];
    })
  );
};

/**
 * Get the map with spacing prop alias values and prop css values (tokens)
 * based in the theme object.
 */
export const getSpacingPropCss = (aliasValue: string, theme: DefaultTheme) => {
  const valuesArr = aliasValue?.split(' ');
  const cssValuesArr = valuesArr?.map((val) => getSpacingValuesMap(theme)[val]);
  return cssValuesArr?.join(' ');
};

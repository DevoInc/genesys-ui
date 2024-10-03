import { DefaultTheme } from 'styled-components';

import type { TGlobalSpacing } from 'src/declarations';

/**
 * Get the map with spacing prop alias values and prop css values (tokens)
 * based in the theme object.
 */
export const getSpacingValuesMap = (
  theme: DefaultTheme,
): { [key in TGlobalSpacing]: string } => ({
  '0': '0',
  auto: 'auto',
  inherit: 'inherit',
  'cmp-xxs': theme.alias.space.cmp.xxs,
  'cmp-xs': theme.alias.space.cmp.xs,
  'cmp-sm': theme.alias.space.cmp.sm,
  'cmp-md': theme.alias.space.cmp.md,
  'cmp-lg': theme.alias.space.cmp.lg,
  'cmp-xl': theme.alias.space.cmp.xl,
  'cmp-xxl': theme.alias.space.cmp.xxl,
  'cmp-xxxl': theme.alias.space.cmp.xxxl,
  'layout-xxs': theme.alias.space.layout.xxs,
  'layout-xs': theme.alias.space.layout.xs,
  'layout-sm': theme.alias.space.layout.sm,
  'layout-md': theme.alias.space.layout.md,
  'layout-lg': theme.alias.space.layout.lg,
  'layout-xl': theme.alias.space.layout.xl,
  'layout-xxl': theme.alias.space.layout.xxl,
  'layout-xxxl': theme.alias.space.layout.xxxl,
});

/**
 * Get the spacing value translated into css units
 * cmp-md -> Xrem, ...
 * could be composed as: 'cmp-sm cmp-md' for margin or padding attributes (for
 * example)
 */
export const getSpacingPropCss = (theme: DefaultTheme) => (spacing: string) => {
  const valuesArr = spacing?.split(' ');
  const spacingMap = getSpacingValuesMap(theme);
  const cssValuesArr = valuesArr?.map((val) => spacingMap[val]);
  return cssValuesArr?.join(' ');
};

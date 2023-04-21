import { DefaultTheme } from 'styled-components';

import { LinkColorScheme, LinkState } from '../declarations';

import { darken, lighten } from 'polished';

export const getLinkColor = ({
  colorScheme,
  themeScheme,
  state = 'enabled',
  colorTokens,
}: {
  colorScheme: LinkColorScheme;
  themeScheme: DefaultTheme['meta']['scheme'];
  state: LinkState;
  colorTokens: DefaultTheme['cmp']['link']['color']['text'];
}): string => {
  if (state === 'hovered')
    return themeScheme === 'dark'
      ? lighten(0.04, colorTokens[colorScheme])
      : darken(0.08, colorTokens[colorScheme]);
  if (state === 'focused')
    return themeScheme === 'dark'
      ? lighten(0.08, colorTokens[colorScheme])
      : darken(0.12, colorTokens[colorScheme]);
  if (state === 'pressed')
    return themeScheme === 'dark'
      ? lighten(0.12, colorTokens[colorScheme])
      : darken(0.16, colorTokens[colorScheme]);
  return colorTokens[colorScheme];
};

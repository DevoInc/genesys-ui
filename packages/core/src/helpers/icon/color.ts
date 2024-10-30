import { DefaultTheme } from 'styled-components';

import { isValidColor } from '../color';
import type { TAllColorScheme } from '../../declarations';
import { getTokenKeyFromColorScheme } from '../color/tokens';

export const getIconColorSchemeToken = ({
  colorScheme,
  theme,
}: {
  colorScheme: TAllColorScheme;
  theme: DefaultTheme;
}) => {
  const colorSchemeForTokens = getTokenKeyFromColorScheme(colorScheme);
  return theme.cmp.icon.color.fill[colorSchemeForTokens];
};

/**
 * Get the evaluated icon color value based in the theme and its color props
 *
 * @param params Object with all the params
 * @param params.theme Object with all the design tokens
 * @param params.color The custom color defined by the user
 * @param params.colorScheme The pre-defined color defined by the user
 * @return Css Color
 */
export const getIconColor =
  (theme: DefaultTheme) =>
  ({
    color,
    colorScheme,
  }: {
    color?: string;
    colorScheme?: TAllColorScheme;
  }) => {
    if (isValidColor(color)) return color;
    if (colorScheme) return getIconColorSchemeToken({ colorScheme, theme });
    return 'inherit';
  };

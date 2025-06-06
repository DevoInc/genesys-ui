import React from 'react';
import { DefaultTheme } from 'styled-components';
import type { TBadgeColorScheme } from './declarations';

/**
 * Get a solid text color in inverse mode
 *
 * @param colorScheme colorScheme value of the Badge
 * @param textColor The text color by default
 * @param theme The theme with all the design tokens
 */
export const getBadgeInverseModeColor = ({
  colorScheme,
  textColor,
  theme,
}: {
  colorScheme: TBadgeColorScheme | React.CSSProperties['backgroundColor'];
  textColor: string;
  theme: DefaultTheme;
}) => {
  if (colorScheme === 'neutral' || colorScheme === 'blend-base')
    return theme.alias.color.text.body.inverse;
  if (colorScheme === 'blend-inverse')
    return theme.alias.color.text.body.strongest;
  return textColor;
};

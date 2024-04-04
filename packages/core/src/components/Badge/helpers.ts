import { TBadgeColorScheme } from './declarations';
import React from 'react';

/**
 * Get a solid text color in inverse mode
 *
 * @param colorScheme colorScheme value of the Badge
 * @param textColor The text color by default
 */
export const getBadgeInverseModeColor = ({
  colorScheme,
  textColor,
}: {
  colorScheme: TBadgeColorScheme | React.CSSProperties['backgroundColor'];
  textColor: string;
}) => {
  if (colorScheme === 'neutral' || colorScheme === 'blend-base') return '#fff';
  if (colorScheme === 'blend-inverse') return '#000';
  return textColor;
};

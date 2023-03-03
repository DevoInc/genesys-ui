import { lighten } from 'polished';
import { DefaultTheme } from 'styled-components';

import {
  ProgressBarColorScheme,
  ProgressBarSize,
  ProgressBarStatus,
  SQUARE,
  STATUS_MAP,
} from './declarations';

/**
 * Get the x & y coordinates for svg circle.
 * */
export const getCxy = (size: ProgressBarSize): number => SQUARE[size] / 2;

/**
 * Get the stroke width for svg circle.
 * */
export const getStroke = (size: ProgressBarSize): number => SQUARE[size] / 10;

/**
 * Get the radio for svg circle.
 * */
export const getRadio = (size: ProgressBarSize): number =>
  getCxy(size) - getStroke(size) / 2;

/**
 * Get the radiant for svg circle.
 * */
export const getRadiant = (size: ProgressBarSize): number =>
  getRadio(size) * Math.PI * 2;

/**
 * Get the color for ProgressBar icons and texts.
 * */
export const getColor = ({
  colorScheme,
  progress,
  theme,
}: {
  colorScheme?: ProgressBarColorScheme;
  progress?: ProgressBarStatus;
  theme: DefaultTheme;
}): string => {
  const colorTextAliasTokens = theme.tokens.alias.color.text;

  if (progress === 'warning') {
    return colorScheme === 'light'
      ? lighten(0.1, colorTextAliasTokens.feedback.warning.base)
      : colorTextAliasTokens.feedback.warning.base;
  } else if (progress === 'error') {
    return colorScheme === 'light'
      ? lighten(0.15, colorTextAliasTokens.feedback.error.base)
      : colorTextAliasTokens.feedback.error.base;
  } else if (progress === 'complete') {
    return colorScheme === 'light'
      ? lighten(0.1, colorTextAliasTokens.feedback.success.base)
      : colorTextAliasTokens.feedback.success.base;
  } else {
    return colorScheme === 'light'
      ? '#DEDEDE' // this color because gets the same contrast (4.09) with dark theme overlay than settingColors.textColor with light theme one
      : colorTextAliasTokens.body.base;
  }
};

/**
 * Get the background color for ProgressBar track.
 * */
export const getProgressBgColor = ({
  progress,
  tokens,
}: {
  progress: ProgressBarStatus;
  tokens: DefaultTheme['tokens']['cmp']['progressBar'];
}): string => {
  const status = STATUS_MAP[progress];
  return tokens?.progress?.color?.background[status];
};

/**
 * Get the background color for ProgressBar track.
 * */
export const getTrackBgColor = ({
  colorScheme,
  progress,
  tokens,
}: {
  colorScheme: ProgressBarColorScheme;
  progress: ProgressBarStatus;
  tokens: DefaultTheme['tokens']['cmp']['progressBar'];
}): string => {
  const status = STATUS_MAP[progress];

  return colorScheme === 'light'
    ? 'rgba(255,255,255,0.08)' // this color because gets the same contrast (4.09) with dark theme overlay than p.theme.feedbackSecondary with light theme one
    : tokens?.track?.color?.background[status];
};

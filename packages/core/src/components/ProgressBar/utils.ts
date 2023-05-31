import { lighten } from 'polished';
import { DefaultTheme } from 'styled-components';

import {
  MAX_PERCENT,
  STATUS_ICON_CIRCULAR_MAP,
  STATUS_ICON_MAP,
} from './constants';

import {
  ProgressBarColorScheme,
  ProgressBarSize,
  ProgressBarStatus,
} from './declarations';

import { SQUARE, STATUS_COLOR_SCHEME_MAP } from './constants';

/**
 * Get the x & y coordinates for svg circle.
 * */
export const getStatus = ({ percent, status }) =>
  percent >= MAX_PERCENT ? 'complete' : status;

export const getColorScheme = ({ percent, status }) =>
  STATUS_COLOR_SCHEME_MAP[percent >= MAX_PERCENT ? 'complete' : status];

export const getPercent = ({ percent, status }) =>
  getStatus({ percent, status }) === 'success' || percent > 100 ? 100 : percent;

export const hasCustomInfo = (customInfo) =>
  customInfo && (customInfo.startInfo || customInfo.endInfo);

export const getIcon = ({ type, icon, percent, status }) => {
  if (icon) return icon;
  if (getStatus({ percent, status }) === 'complete')
    return type === 'circular'
      ? STATUS_ICON_CIRCULAR_MAP['complete']
      : STATUS_ICON_MAP['complete'];
  if (status === 'warning')
    return type === 'circular'
      ? STATUS_ICON_CIRCULAR_MAP['warning']
      : STATUS_ICON_MAP['warning'];
  if (status === 'error')
    return type === 'circular'
      ? STATUS_ICON_CIRCULAR_MAP['error']
      : STATUS_ICON_MAP['error'];
  return null;
};

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
  status,
  theme,
}: {
  colorScheme?: ProgressBarColorScheme;
  status?: ProgressBarStatus;
  theme: DefaultTheme;
}): string => {
  const colorTextAliasTokens = theme.alias.color.text;

  if (status === 'warning') {
    return colorScheme === 'light'
      ? lighten(0.1, colorTextAliasTokens.feedback.warning.base)
      : colorTextAliasTokens.feedback.warning.base;
  } else if (status === 'error') {
    return colorScheme === 'light'
      ? lighten(0.15, colorTextAliasTokens.feedback.error.base)
      : colorTextAliasTokens.feedback.error.base;
  } else if (status === 'complete') {
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
  status,
  tokens,
}: {
  status: ProgressBarStatus;
  tokens: DefaultTheme['cmp']['progressBar'];
}): string => {
  const statusEval = STATUS_COLOR_SCHEME_MAP[status];
  return tokens?.progress?.color?.background[statusEval];
};

/**
 * Get the background color for ProgressBar track.
 * */
export const getTrackBgColor = ({
  colorScheme,
  status,
  tokens,
}: {
  colorScheme: ProgressBarColorScheme;
  status: ProgressBarStatus;
  tokens: DefaultTheme['cmp']['progressBar'];
}): string => {
  const statusEval = STATUS_COLOR_SCHEME_MAP[status];
  return colorScheme === 'light'
    ? 'rgba(255,255,255,0.08)' // this color because gets the same contrast (4.09) with dark theme overlay than p.theme.feedbackSecondary with light theme one
    : tokens?.track?.color?.background[statusEval];
};

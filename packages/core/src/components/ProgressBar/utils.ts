import { DefaultTheme } from 'styled-components';

import {
  MAX_PERCENT,
  STATUS_ICON_CIRCULAR_MAP,
  PROGRESSBAR_STATUS_ICON_MAP,
} from './constants';

import {
  IBaseProgressBar,
  TProgressBarColorScheme,
  TProgressBarSize,
  TProgressBarStatus,
  TProgressBarCustomInfo,
} from './declarations';

import { SQUARE, STATUS_COLOR_SCHEME_MAP } from './constants';
import type { IconProps } from '../Icon';

interface ProgressBarBaseUtilsProps
  extends Pick<IBaseProgressBar, 'percent' | 'status'> {}

interface ProgressBarUtilsProps
  extends ProgressBarBaseUtilsProps,
    Pick<IBaseProgressBar, 'type'> {
  icon?: IconProps['children'];
}

/**
 * Get the status based also in the percent prop
 *
 * @return ProgressBar status value
 */
export const getStatus = ({ percent, status }: ProgressBarBaseUtilsProps) =>
  percent >= MAX_PERCENT ? 'complete' : status;

/**
 * Get the colorScheme value (for internal components which use that prop) based
 * in the status prop
 *
 * @return colorScheme value
 */
export const getColorSchemeFromStatus = ({
  percent,
  status,
}: ProgressBarBaseUtilsProps) =>
  STATUS_COLOR_SCHEME_MAP[percent >= MAX_PERCENT ? 'complete' : status];

/**
 * Get the percent also based in the status prop and restricting it to 100
 *
 * @return percent value
 */
export const getPercent = ({ percent, status }: ProgressBarBaseUtilsProps) =>
  getStatus({ percent, status }) === 'complete' || percent > 100
    ? 100
    : percent;

/**
 * If the ProgressBar has customInfo defined
 *
 * @return boolean
 */
export const hasCustomInfo = (customInfo: TProgressBarCustomInfo) =>
  Boolean(customInfo?.startInfo) || Boolean(customInfo?.endInfo);

/**
 * Get the icon for the ProgressBar not only based in the icon prop, but also in
 * type, percent and status
 *
 * @return icon name
 */
export const getIcon = ({
  type,
  icon,
  percent,
  status,
}: ProgressBarUtilsProps) => {
  if (icon) return icon;
  const iconMap =
    type === 'circular'
      ? STATUS_ICON_CIRCULAR_MAP
      : PROGRESSBAR_STATUS_ICON_MAP;
  if (getStatus({ percent, status }) === 'complete') return iconMap.complete;
  return iconMap[status] || null;
};

/**
 * Get the x & y coordinates for svg circle.
 * */
export const getCxy = (size: TProgressBarSize): number => SQUARE[size] / 2;

/**
 * Get the stroke width for svg circle.
 * */
export const getStroke = (size: TProgressBarSize): number => SQUARE[size] / 10;

/**
 * Get the radio for svg circle.
 * */
export const getRadio = (size: TProgressBarSize): number =>
  getCxy(size) - getStroke(size) / 2;

/**
 * Get the radiant for svg circle.
 * */
export const getRadiant = (size: TProgressBarSize): number =>
  getRadio(size) * Math.PI * 2;

/**
 * Get the background color for ProgressBar track.
 * */
export const getProgressBgColor = ({
  $status,
  tokens,
}: {
  $status: TProgressBarStatus;
  tokens: DefaultTheme['cmp']['progressBar'];
}): string => {
  const statusEval = STATUS_COLOR_SCHEME_MAP[$status];
  return tokens?.progress?.color?.background[statusEval];
};

/**
 * Get the background color for ProgressBar track.
 * */
export const getTrackBgColor = ({
  $colorScheme,
  $status,
  tokens,
}: {
  $colorScheme: TProgressBarColorScheme;
  $status: TProgressBarStatus;
  tokens: DefaultTheme['cmp']['progressBar'];
}): string => {
  const statusEval = STATUS_COLOR_SCHEME_MAP[$status];
  return $colorScheme === 'light'
    ? 'rgba(255,255,255,0.08)' // this color because gets the same contrast (4.09) with dark theme overlay than p.theme.feedbackSecondary with light theme one
    : tokens?.track?.color?.background[statusEval];
};

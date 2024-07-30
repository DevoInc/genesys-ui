import * as React from 'react';

import { STATUS_ICON_MAP } from '../../constants';
import type { TProgressBarSize, TProgressBarStatus } from './declarations';
import type { TGlobalSize, TGlobalStatus } from '../../declarations';

export const MAX_PERCENT = 100;

export const PROGRESSBAR_STATUS_ICON_MAP: {
  [key in TProgressBarStatus]: React.ReactNode;
} = {
  progressing: null,
  error: STATUS_ICON_MAP.filled.error,
  warning: STATUS_ICON_MAP.filled.warning,
  complete: STATUS_ICON_MAP.filled.success,
} as const;

export const STATUS_ICON_CIRCULAR_MAP: {
  [key in TProgressBarStatus]: React.ReactNode;
} = {
  progressing: null,
  error: STATUS_ICON_MAP.stroke.error,
  warning: STATUS_ICON_MAP.stroke.warning,
  complete: STATUS_ICON_MAP.stroke.success,
} as const;

export const ICON_CIRCULAR_SIZE_MAP: {
  [key in TProgressBarSize]: TGlobalSize;
} = {
  sm: 'xxxs',
  md: 'sm',
} as const;

export const ICON_STANDARD_SIZE_MAP: {
  [key in TProgressBarSize]: TGlobalSize;
} = {
  sm: 'xxxxs',
  md: 'xxxs',
} as const;

export const STATUS_COLOR_SCHEME_MAP: {
  [key: string]: TGlobalStatus;
} = {
  progressing: 'base',
  complete: 'success',
  error: 'error',
  warning: 'warning',
} as const;

export const SQUARE: {
  [key in TProgressBarSize]: number;
} = {
  sm: 40,
  md: 60,
} as const;

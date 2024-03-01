import React from 'react';

import type { ProgressBarSize, ProgressBarStatus } from './declarations';
import type { GlobalSize, GlobalStatus } from '../../declarations';
import { STATUS_ICON_MAP } from '../../constants';

export const MAX_PERCENT = 100;

export const PROGRESSBAR_STATUS_ICON_MAP: {
  [key in ProgressBarStatus]: React.ReactNode;
} = {
  progressing: null,
  error: STATUS_ICON_MAP.filled.error,
  warning: STATUS_ICON_MAP.filled.warning,
  complete: STATUS_ICON_MAP.filled.success,
} as const;

export const STATUS_ICON_CIRCULAR_MAP: {
  [key in ProgressBarStatus]: React.ReactNode;
} = {
  progressing: null,
  error: STATUS_ICON_MAP.stroke.error,
  warning: STATUS_ICON_MAP.stroke.warning,
  complete: STATUS_ICON_MAP.stroke.success,
} as const;

export const ICON_CIRCULAR_SIZE_MAP: {
  [key in ProgressBarSize]: GlobalSize;
} = {
  sm: 'xxxs',
  md: 'sm',
} as const;

export const ICON_STANDARD_SIZE_MAP: {
  [key in ProgressBarSize]: GlobalSize;
} = {
  sm: 'xxxxs',
  md: 'xxxs',
} as const;

export const STATUS_COLOR_SCHEME_MAP: {
  [key: string]: GlobalStatus;
} = {
  progressing: 'base',
  complete: 'success',
  error: 'error',
  warning: 'warning',
} as const;

export const SQUARE: {
  [key in ProgressBarSize]: number;
} = {
  sm: 40,
  md: 60,
} as const;

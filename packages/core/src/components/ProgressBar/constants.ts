import iconDictionary from '@devoinc/genesys-icons/dist/icon-variables.js';

import type { ProgressBarStatus } from './declarations';
import type { GlobalStatus } from '../../declarations';
import { STATUS_ICON_MAP as BASE_STATUS_ICON_MAP } from '../../constants';

export const MAX_PERCENT = 100;

export const STATUS_ICON_MAP: {
  [key in ProgressBarStatus]: keyof typeof iconDictionary;
} = {
  progressing: null,
  error: BASE_STATUS_ICON_MAP.filled.error,
  warning: BASE_STATUS_ICON_MAP.filled.warning,
  complete: BASE_STATUS_ICON_MAP.filled.success,
} as const;

export const STATUS_ICON_CIRCULAR_MAP: {
  [key in ProgressBarStatus]: keyof typeof iconDictionary;
} = {
  progressing: null,
  error: BASE_STATUS_ICON_MAP.stroke.error,
  warning: BASE_STATUS_ICON_MAP.stroke.warning,
  complete: BASE_STATUS_ICON_MAP.stroke.success,
} as const;

export const ICON_CIRCULAR_SIZE_MAP = {
  sm: 'lg',
  md: 'xl',
} as const;

export const ICON_STANDARD_SIZE_MAP = {
  sm: 'xxxs',
  md: 'xxs',
} as const;

export const STATUS_COLOR_SCHEME_MAP: {
  [key: string]: GlobalStatus;
} = {
  progressing: 'base',
  complete: 'success',
  error: 'error',
  warning: 'warning',
} as const;

export const SQUARE = {
  sm: 80,
  md: 100,
} as const;

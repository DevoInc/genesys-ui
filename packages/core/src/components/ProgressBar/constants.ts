import { ProgressBarStatus } from './declarations';
import { BodyColorScheme, UIColorScheme } from '../../declarations';

export const MAX_PERCENT = 100;

export const STATUS_ICON_MAP: {
  [key in ProgressBarStatus]: string;
} = {
  error: 'gi-error_warning_danger_stop_filled',
  warning: 'gi-attention_error_alert_caution_filled',
  progressing: null,
  complete: 'gi-ok_successful_check_filled',
} as const;

export const DIRECTION = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
} as const;

export const ICON_CIRCULAR_SIZE_MAP = {
  sm: 'lg',
  md: 'xl',
} as const;

export const ICON_STANDARD_SIZE_MAP = {
  sm: 'xs',
  md: 'sm',
} as const;

export const STATUS_COLOR_SCHEME_MAP: {
  [key: string]: UIColorScheme | BodyColorScheme;
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

import { BodyColorScheme, UIColorScheme } from '../../declarations';
import { PickUnion } from '../../typeFunctions';

export type ProgressBarStatus =
  | 'progressing'
  | PickUnion<UIColorScheme, 'warning' | 'error'>
  | 'warning'
  | 'error'
  | 'complete';

export type ProgressBarColorScheme = 'light' | 'dark';

export type ProgressBarSize = 'sm' | 'md';

export type ProgressBarType = 'standard' | 'circular';

export const DIRECTION = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
} as const;

export const ICON_CIRCULAR_SIZE = {
  sm: 'lg',
  md: 'xl',
} as const;

export const STATUS_MAP: {
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

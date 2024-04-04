import type { TButtonSize } from '../Button';
import type { TFloatingHelperSize } from './declarations';

export const FLOATING_HELPER_ICON_BUTTON_SIZE_MAP: {
  [key in TFloatingHelperSize]: TButtonSize;
} = {
  sm: 'xxs',
  md: 'xs',
  lg: 'sm',
} as const;

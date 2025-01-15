import type { TButtonSize } from '../Button';
import type { TFloatingHelperSize } from './declarations';

export const FLOATING_HELPER_ICON_BUTTON_SIZE_MAP: {
  [key in TFloatingHelperSize]: TButtonSize;
} = {
  sm: 'xs',
  md: 'sm',
  lg: 'md',
};

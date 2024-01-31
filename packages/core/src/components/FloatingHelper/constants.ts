import { ButtonSize } from '../Button';
import { FloatingHelperSize } from './declarations';

export const FLOATING_HELPER_ICON_BUTTON_SIZE_MAP: {
  [key in FloatingHelperSize]: ButtonSize;
} = {
  sm: 'xxs',
  md: 'xs',
  lg: 'sm',
} as const;

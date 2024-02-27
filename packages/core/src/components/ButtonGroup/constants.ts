import { ButtonSize } from '../Button';

export const FLEX_SPACING_SIZE_MAP: { [key in ButtonSize]: ButtonSize } = {
  xxs: 'xxs',
  xs: 'xxs',
  sm: 'xs',
  md: 'xs',
  lg: 'sm',
} as const;

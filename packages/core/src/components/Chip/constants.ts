import type { TButtonSize } from '../Button';
import type { TChipSize } from './declarations';

export const CHIP_REMOVE_BUTTON_SIZE_MAP: {
  [key in TChipSize]: TButtonSize;
} = {
  xxs: 'xxs',
  xs: 'xxs',
  sm: 'xs',
  md: 'sm',
  lg: 'md',
};

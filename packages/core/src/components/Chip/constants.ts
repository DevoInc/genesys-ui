import type { TButtonSize } from '../Button';
import type { TChipSize } from './declarations';
import { TIconSize } from '../Icon/declarations';

export const CHIP_REMOVE_BUTTON_SIZE_MAP: {
  [key in TChipSize]: TButtonSize;
} = {
  xxs: 'xxs',
  xs: 'xxs',
  sm: 'xs',
  md: 'sm',
  lg: 'md',
};

export const CHIP_ICON_SIZE_MAP: {
  [key in TChipSize]: TIconSize;
} = {
  xxs: 'xxxs',
  xs: 'xxs',
  sm: 'xs',
  md: 'sm',
  lg: 'md',
};

export const CHIP_ICON_OFFSET_SIZE_MAP: {
  [key in TIconSize]: TIconSize;
} = {
  xxxs: 'xxs',
  xxs: 'xs',
  xs: 'sm',
  sm: 'md',
  md: 'lg',
};

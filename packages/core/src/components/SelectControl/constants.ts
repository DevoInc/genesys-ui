import type { TBaseSize, TFieldSize } from '../../declarations';
import type { TChipSize } from '../Chip/declarations';
import type { IconProps } from '../Icon';

export const CUSTOM_HEIGHT: { [key in TBaseSize]: number } = {
  sm: 27,
  md: 32,
  lg: 38,
} as const;

export const FIELD_SIZE_TO_CHIP_SIZE: { [key in TFieldSize]: TChipSize } = {
  sm: 'xxs',
  md: 'xs',
  lg: 'sm',
} as const;

export const FIELD_SIZE_TO_VALUE_ICON_SIZE: {
  [key in TFieldSize]: IconProps['size'];
} = {
  sm: 'xxxs',
  md: 'xxs',
  lg: 'xs',
} as const;

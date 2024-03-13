import { BaseSize, TFieldSize } from '../../declarations';
import { ChipSize } from '../Chip/declarations';
import { IconProps } from '../Icon';

export const CUSTOM_HEIGHT: { [key in BaseSize]: number } = {
  sm: 27,
  md: 32,
  lg: 38,
} as const;

/** A map of field sizes to chip sizes. */
export const FIELD_SIZE_TO_CHIP_SIZE: { [key in TFieldSize]: ChipSize } = {
  sm: 'xxs',
  md: 'xs',
  lg: 'sm',
} as const;

/** A map of field sizes to chip sizes. */
export const FIELD_SIZE_TO_VALUE_ICON_SIZE: {
  [key in TFieldSize]: IconProps['size'];
} = {
  sm: 'xxxs',
  md: 'xxs',
  lg: 'xs',
} as const;

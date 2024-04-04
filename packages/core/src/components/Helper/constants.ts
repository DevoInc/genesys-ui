import type { TGlobalSpacing } from '../../declarations';
import type { IconProps } from '../Icon';
import type { THelperSize } from './declarations';

export const HELPER_ICON_SIZE_MAP: { [key in THelperSize]: IconProps['size'] } =
  {
    xxs: 'xxxxs',
    xs: 'xxxs',
    sm: 'xxs',
    md: 'xs',
    lg: 'sm',
  } as const;

export const HELPER_SIZE_SPACE_MAP: { [key in THelperSize]: TGlobalSpacing } = {
  xxs: 'cmp-xs',
  xs: 'cmp-xs',
  sm: 'cmp-xs',
  md: 'cmp-sm',
  lg: 'cmp-sm',
} as const;

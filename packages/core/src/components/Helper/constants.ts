import { TGlobalSpacing } from '../../declarations';
import { IconProps } from '../Icon';
import { HelperSize } from './declarations';

export const HELPER_ICON_SIZE_MAP: { [key in HelperSize]: IconProps['size'] } =
  {
    xxs: 'xxxxs',
    xs: 'xxxs',
    sm: 'xxs',
    md: 'xs',
    lg: 'sm',
  } as const;

export const HELPER_SIZE_SPACE_MAP: { [key in HelperSize]: TGlobalSpacing } = {
  xxs: 'cmp-xs',
  xs: 'cmp-xs',
  sm: 'cmp-xs',
  md: 'cmp-sm',
  lg: 'cmp-sm',
} as const;

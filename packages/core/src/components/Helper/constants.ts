import { STATUS_ICON_MAP } from '../../constants';
import { ActiveStatus, GlobalSpacing } from '../../declarations';
import { IconProps } from '../Icon';
import { HelperSize } from './declarations';
import iconDictionary from '@devoinc/genesys-icons/dist/icon-variables.js';

export const HELPER_ICON_STATUS_MAP: {
  [key in ActiveStatus]: keyof typeof iconDictionary;
} = STATUS_ICON_MAP.filled;

export const HELPER_ICON_SIZE_MAP: { [key in HelperSize]: IconProps['size'] } =
  {
    xxs: 'xxxxs',
    xs: 'xxxs',
    sm: 'xxs',
    md: 'xs',
    lg: 'sm',
  } as const;

export const HELPER_SIZE_SPACE_MAP: { [key in HelperSize]: GlobalSpacing } = {
  xxs: 'cmp-xs',
  xs: 'cmp-xs',
  sm: 'cmp-xs',
  md: 'cmp-sm',
  lg: 'cmp-sm',
} as const;

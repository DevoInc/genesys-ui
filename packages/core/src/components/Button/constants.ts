import { BadgeSize, ButtonColorScheme, ButtonSize } from '../../';
import { SpinnerColorScheme, SpinnerSize } from '../SpinnerLoader/constants';

export const BUTTON_LOADING_ICON_NAME = {
  'loading-success': 'check_thick',
  'loading-error': 'exit_close',
} as const;

export const BUTTON_BADGE_SIZE_MAP: { [key in ButtonSize]: BadgeSize } = {
  xxs: 'sm',
  xs: 'sm',
  sm: 'sm',
  md: 'sm',
  lg: 'md',
} as const;

export const BUTTON_LOADER_SIZE_MAP: { [key in ButtonSize]: SpinnerSize } = {
  xxs: 'xxxs',
  xs: 'xxxs',
  sm: 'xxxs',
  md: 'xxs',
  lg: 'xs',
} as const;

export const BUTTON_LOADER_COLOR_SCHEME_MAP: {
  [key in ButtonColorScheme]: SpinnerColorScheme;
} = {
  accent: 'lightTrans',
  'accent-high': 'darkTrans',
  'blend-inverse': 'lightTrans',
  'blend-base': 'darkTrans',
  error: 'darkTrans',
  help: 'darkTrans',
  info: 'darkTrans',
  quiet: 'darkTrans',
  neutral: 'darkTrans',
  success: 'darkTrans',
  warning: 'darkTrans',
};

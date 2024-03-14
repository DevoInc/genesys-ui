import { ButtonColorScheme, ButtonSize } from './declarations';
import { BadgeSize } from '../Badge';
import {
  TSpinnerColorScheme,
  TSpinnerSize,
} from '../SpinnerLoader/declarations';

export const BUTTON_BADGE_SIZE_MAP: { [key in ButtonSize]: BadgeSize } = {
  xxs: 'sm',
  xs: 'sm',
  sm: 'sm',
  md: 'sm',
  lg: 'md',
} as const;

export const BUTTON_LOADER_SIZE_MAP: { [key in ButtonSize]: TSpinnerSize } = {
  xxs: 'xxxs',
  xs: 'xxs',
  sm: 'xs',
  md: 'sm',
  lg: 'md',
} as const;

export const BUTTON_LOADER_COLOR_SCHEME_MAP: {
  [key in ButtonColorScheme]: TSpinnerColorScheme;
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

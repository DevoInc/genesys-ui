import type { TButtonColorScheme, TButtonSize } from './declarations';
import type { TBadgeSize } from '../Badge';
import type {
  TSpinnerColorScheme,
  TSpinnerSize,
} from '../SpinnerLoader/declarations';

export const BUTTON_SIZE_DEFAULT = 'md';
export const BUTTON_STATE_DEFAULT = 'enabled';
export const BUTTON_COLOR_SCHEME_DEFAULT = 'neutral';
export const BUTTON_CLASS_NAME_BASE = 'button';
export const BUTTON_TEXT_CLASS_NAME_BASE = `${BUTTON_CLASS_NAME_BASE}__text`;

export const BUTTON_BADGE_SIZE_MAP: { [key in TButtonSize]: TBadgeSize } = {
  xxs: 'sm',
  xs: 'sm',
  sm: 'sm',
  md: 'sm',
  lg: 'md',
};

export const BUTTON_LOADER_SIZE_MAP: { [key in TButtonSize]: TSpinnerSize } = {
  xxs: 'xxxs',
  xs: 'xxs',
  sm: 'xs',
  md: 'sm',
  lg: 'md',
};

export const BUTTON_LOADER_COLOR_SCHEME_MAP: {
  [key in TButtonColorScheme]: TSpinnerColorScheme;
} = {
  accent: 'lightTrans',
  'accent-high': 'darkTrans',
  'blend-inverse': 'lightTrans',
  'blend-base': 'darkTrans',
  error: 'darkTrans',
  help: 'darkTrans',
  info: 'darkTrans',
  quiet: 'darkTrans',
  'quiet-blend': 'darkTrans',
  neutral: 'darkTrans',
  success: 'darkTrans',
  warning: 'darkTrans',
};

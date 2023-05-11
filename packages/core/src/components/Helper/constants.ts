import { GlobalSpacing, GlobalStatus } from '../../declarations';
import { ButtonSize } from '../Button';
import { IconProps } from '../Icon';
import { FloatingHelperSize, HelperSize } from './declarations';

export const HELPER_ICON_BUTTON_SIZE_MAP: {
  [key in FloatingHelperSize]: ButtonSize;
} = {
  sm: 'xxs',
  md: 'xs',
  lg: 'sm',
} as const;

// TODO: the string should be one of icons
export const HELPER_ICON_STATUS_MAP: { [key in GlobalStatus]: string } = {
  base: '',
  error: 'error_warning_danger_stop_filled',
  success: 'ok_successful_check_filled',
  warning: 'attention_error_alert_caution_filled',
  help: 'about_question_faq_help_filled',
  info: 'info_about_round_filled',
} as const;

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

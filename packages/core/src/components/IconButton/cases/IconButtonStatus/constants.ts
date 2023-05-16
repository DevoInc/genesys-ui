// ICON BUTTON STATUS - ICON PROP VALUES ------------------------------------ //

import { ActiveStatus, UIColorScheme } from '../../../../';

// TODO: the string should be one of icon
export const ICON_BUTTON_STATUS_ICON_PROP_MAP: {
  [key in ActiveStatus]: string;
} = {
  error: 'gi-error_warning_danger_stop_filled',
  help: 'gi-about_question_faq_help_filled',
  info: 'gi-info_about_round_filled',
  success: 'gi-ok_successful_check_filled',
  warning: 'gi-attention_error_alert_caution_filled',
} as const;

// ICON BUTTON - COLOR SCHEME - PROP VALUES --------------------------------- //

export type IconButtonStatusColorScheme = UIColorScheme;

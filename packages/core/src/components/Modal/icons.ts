import { ActiveStatus } from '../../declarations';

// This should be of icons
export const statusIconMap: { [key in ActiveStatus]: string } = {
  success: 'gi-ok_successful_check_filled',
  help: 'gi-about_question_faq_help_filled',
  info: 'gi-info_about_round_filled',
  error: 'gi-error_warning_danger_stop_filled',
  warning: 'gi-attention_error_alert_caution_filled',
} as const;

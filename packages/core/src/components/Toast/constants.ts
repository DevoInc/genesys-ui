import { ActiveStatus } from '../../declarations';

// TODO: string should be one of icons
export const toastStatusToIconMap: { [key in ActiveStatus]: string } = {
  help: 'gi-about_question_faq_help_filled',
  info: 'gi-info_about_round_filled',
  error: 'gi-error_warning_danger_stop_filled',
  success: 'gi-ok_successful_check_filled',
  warning: 'gi-attention_error_alert_caution_filled',
};

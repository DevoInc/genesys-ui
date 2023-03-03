import { ActiveStatus } from '../../declarations';

// TODO: string should be one of icons
export const toastStatusToIconMap: { [key in ActiveStatus]: string } = {
  help: 'about_question_faq_help_filled',
  info: 'info_about_round_filled',
  error: 'error_warning_danger_stop_filled',
  success: 'ok_successful_check_filled',
  warning: 'attention_error_alert_caution_filled',
};

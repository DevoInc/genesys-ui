import { ActiveStatus } from '../../declarations';

// icons for status
export const statusIconMap: {
  // TODO: string should be one of icons
  filled: { [key in ActiveStatus]: string };
  stroke: { [key in ActiveStatus]: string };
} = {
  filled: {
    help: 'gi-about_question_faq_help_filled',
    info: 'gi-info_about_round_filled',
    error: 'gi-error_warning_danger_stop_filled',
    success: 'gi-ok_successful_check_filled',
    warning: 'gi-attention_error_alert_caution_filled',
  },
  stroke: {
    help: 'gi-about_question_faq_help',
    info: 'gi-info_about_round',
    error: 'gi-error_warning_danger_stop',
    success: 'gi-ok_successful_check',
    warning: 'gi-attention_error_alert_caution',
  },
} as const;

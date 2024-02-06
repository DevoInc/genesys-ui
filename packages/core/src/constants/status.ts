import iconDictionary from '@devoinc/genesys-icons/dist/icon-variables.js';

import type { ActiveStatus } from '../declarations';

export const STATUS_ICON_MAP: {
  filled: { [key in ActiveStatus]: keyof typeof iconDictionary };
  stroke: { [key in ActiveStatus]: keyof typeof iconDictionary };
} = {
  filled: {
    error: 'gi-error_warning_danger_stop_filled',
    help: 'gi-about_question_faq_help_filled',
    info: 'gi-info_round_filled',
    success: 'gi-check_ok_rounded_filled',
    warning: 'gi-attention_error_alert_caution_filled',
  },
  stroke: {
    error: 'gi-error_warning_danger_stop',
    help: 'gi-about_question_faq_help',
    info: 'gi-info_round',
    success: 'gi-ok_successful_check',
    warning: 'gi-attention_error_alert_caution',
  },
} as const;

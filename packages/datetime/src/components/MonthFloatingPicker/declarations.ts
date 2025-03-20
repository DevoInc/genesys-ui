import { TYearSelectorInlineI18n } from '../YearSelectorInline';
import type { TFieldSize } from '@devoinc/genesys-ui';

export type TMonthFloatingPickerSize = TFieldSize;

export type TMonthFloatingPickerI18n = TYearSelectorInlineI18n & {
  /** The next month text */
  nextMonth: string;
  /** The previous month text */
  prevMonth: string;
  /** The input month text */
  inputMonth: string;
};

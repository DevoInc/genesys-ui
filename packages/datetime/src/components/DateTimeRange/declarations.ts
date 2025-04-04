import { TMonthFloatingPickerI18n } from '../MonthFloatingPicker';

export type TDateTimeRangeSource =
  | 'cal-left'
  | 'cal-right'
  | 'time-left'
  | 'time-right'
  | 'presets';

export type TDateTimeRangeI18n = TMonthFloatingPickerI18n & {
  /** The from month text */
  fromMonth: string;
  /** The from time text */
  fromTime: string;
  /** The to month text */
  toMonth: string;
  /** The to time text */
  toTime: string;
};

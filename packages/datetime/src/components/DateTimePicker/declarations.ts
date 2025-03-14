import type { TDateTimeInputI18n } from '../DateTimeInput/declarations';
import type { TMonthFloatingPickerI18n } from '../MonthFloatingPicker';
import type { TTimeI18n } from '../Time/declarations';

export type TDateTimePickerI18n = TMonthFloatingPickerI18n &
  TTimeI18n &
  TDateTimeInputI18n;

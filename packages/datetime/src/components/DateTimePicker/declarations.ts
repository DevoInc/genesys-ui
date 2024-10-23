import type { TDateTimeInputI18n } from '../DateTimeInput/declarations';
import type { TMonthSelectorI18n } from '../MonthSelector';
import type { TTimeI18n } from '../Time/declarations';

export type TDateTimePickerI18n = TMonthSelectorI18n &
  TTimeI18n &
  TDateTimeInputI18n;

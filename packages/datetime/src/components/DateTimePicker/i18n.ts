import { defaultDateTimeInputI18n } from '../DateTimeInput/i18n';
import { defaultMonthSelectorI18n } from '../MonthSelector';
import { defaultTimeI18n } from '../Time/i18n';
import { TDateTimePickerI18n } from './declarations';

export const defaultDateTimePickerI18n: TDateTimePickerI18n = {
  ...defaultMonthSelectorI18n,
  ...defaultTimeI18n,
  ...defaultDateTimeInputI18n,
};

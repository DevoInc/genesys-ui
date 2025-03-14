import { defaultDateTimeInputI18n } from '../DateTimeInput/i18n';
import { defaultMonthFloatingPickerI18n } from '../MonthFloatingPicker';
import { defaultTimeI18n } from '../Time/i18n';
import { TDateTimePickerI18n } from './declarations';

export const defaultDateTimePickerI18n: TDateTimePickerI18n = {
  ...defaultMonthFloatingPickerI18n,
  ...defaultTimeI18n,
  ...defaultDateTimeInputI18n,
};

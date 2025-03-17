import { defaultMonthFloatingPickerI18n } from '../MonthFloatingPicker';
import { defaultTimeI18n } from '../Time/i18n';
import { TDateTimeI18n } from './declarations';

export const defaultDateTimeI18n: TDateTimeI18n = {
  ...defaultMonthFloatingPickerI18n,
  ...defaultTimeI18n,
};

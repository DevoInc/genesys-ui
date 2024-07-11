import { defaultMonthSelectorI18n } from '../MonthSelector';
import { defaultTimeI18n } from '../Time/i18n';
import { TDateTimeI18n } from './declarations';

export const defaultDateTimeI18n: TDateTimeI18n = {
  ...defaultMonthSelectorI18n,
  ...defaultTimeI18n,
};

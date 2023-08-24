import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import * as Locales from 'date-fns/locale';

export interface DateContext {
  tz: string;
  formatDate: string;
  locale: string;
}

const valueIsValid = (value) =>
  value && typeof value === 'number' && value >= 0;

export const dateFormatter = (
  value: string | number | Date,
  context: DateContext
): string | number | Date =>
  valueIsValid(value)
    ? format(utcToZonedTime(value, context.tz), context?.formatDate ?? 'PPpp', {
        locale: Locales[context.locale || 'en'],
      })
    : value;

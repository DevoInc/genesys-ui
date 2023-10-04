import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import * as Locales from 'date-fns/locale';

export interface DateContext {
  tz?: string;
  formatDate?: string;
  locale?: string;
}

export const dateFormatter = (value: unknown, context: DateContext): string => {
  return typeof value === 'string' ||
    typeof value === 'number' ||
    value instanceof Date
    ? format(utcToZonedTime(value, context.tz), context?.formatDate ?? 'PPpp', {
        locale: Locales[context.locale || 'en'],
      })
    : String(value);
};

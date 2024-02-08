import { isValid, format, type Locale } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { enUS } from 'date-fns/locale';

export interface DateContext {
  tz?: string;
  formatDate?: string;
  locale?: Locale;
}

// prettier-ignore
export const dateFormatter = (value: unknown, context: DateContext): string =>
  !isValid(value) || (typeof value === 'number' && value < 0)
    ? String(value)
    : format(
      utcToZonedTime(value as string | number | Date, context.tz),
      context?.formatDate ?? 'PPpp',
      { locale: context?.locale || enUS },
    );

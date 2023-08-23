import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import * as Locales from 'date-fns/locale';
import { CellData } from '../../declarations';

export interface DateContext {
  tz: string;
  formatDate: string;
  locale: string;
}

export const dateFormatter = (value: CellData, context: DateContext) =>
  typeof value !== 'object'
    ? format(
        utcToZonedTime(new Date(value as string), context.tz),
        context?.formatDate ?? 'PPpp',
        {
          locale: Locales[context.locale || 'en'],
        }
      )
    : value;

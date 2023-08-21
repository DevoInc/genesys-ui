import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import * as Locales from 'date-fns/locale';
import { CellData, DateContext } from '../../declarations';

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

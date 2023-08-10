import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import * as Locales from 'date-fns/locale';
import { DateContext } from '../../declarations';

export const dateFormatter = (value: Date | string, context: DateContext) => {
  return format(
    utcToZonedTime(new Date(value), context.tz),
    context?.formatDate ?? 'PPpp',
    {
      locale: Locales[context.locale || 'en'],
    }
  );
};

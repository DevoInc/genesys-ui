import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import * as Locales from 'date-fns/locale';

export const dateFormatter = (value, columnDef, context) => {
  debugger;
  return format(
    utcToZonedTime(new Date(value), context.tz),
    context?.formatDate ?? 'PPpp',
    {
      locale: Locales[context.locale || 'en'],
    }
  );
};

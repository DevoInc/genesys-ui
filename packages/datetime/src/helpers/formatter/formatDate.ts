import { format as formatFn } from 'date-fns';
import { tz as tzFn } from '@date-fns/tz';

/**
 * Formats a date string based on the provided parameters
 */
export const formatDate = (
  dt: string | number | Date,
  format: string = 'yyyy-MM-dd HH:mm:ss',
  tz = Intl.DateTimeFormat().resolvedOptions().timeZone,
): string => {
  try {
    return typeof dt === 'string' ? dt : formatFn(dt, format, { in: tzFn(tz) });
  } catch (error) {
    return error.message;
  }
};

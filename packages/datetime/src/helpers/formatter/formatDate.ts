import { format as formatFNS } from 'date-fns';

/**
 * Formats a date string based on the provided parameters
 */
export const formatDate = (
  dt: string | number | Date,
  format: string = 'yyyy-MM-dd HH:mm:ss',
): string => (typeof dt === 'string' ? dt : formatFNS(dt, format));

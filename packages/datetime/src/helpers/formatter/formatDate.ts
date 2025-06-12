import { format as formatFn } from 'date-fns';
import { tz as tzFn } from '@date-fns/tz';

/**
 * Formats a date string based on the provided parameters
 */
export const formatDate =
  (params: { format?: string; tz?: string } = {}) =>
  (dt: string | number | Date): string => {
    const { format, tz } = {
      tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
      format: 'yyyy-MM-dd HH:mm:ss',
      ...params,
    };
    try {
      return typeof dt === 'string'
        ? dt
        : formatFn(dt, format, { in: tzFn(tz) });
    } catch (error) {
      return error.message;
    }
  };

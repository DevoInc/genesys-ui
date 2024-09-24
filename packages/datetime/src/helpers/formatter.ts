import { format as formatFNS } from 'date-fns';

export const getFormatDateTimeStr = (hasSecons = true, hasMillis = false) =>
  `yyyy-MM-dd HH:mm${hasSecons || hasMillis ? `:ss${hasMillis ? '.SSS' : ''}` : ''}`;

/**
 * Returns a time string format based on the provided parameters.
 */
export const getFormatTimeStr = (hasSecons = true, hasMillis = false) =>
  `HH:mm${hasSecons || hasMillis ? `:ss${hasMillis ? '.SSS' : ''}` : ''}`;

export const getFormatDateStr = () => 'yyyy-MM-dd';

/**
 * Formats a date string based on the provided parameters
 */
export const formatDate = (
  dt: Date | number,
  format: string = 'yyyy-MM-dd HH:mm:ss',
): string => formatFNS(dt, format);

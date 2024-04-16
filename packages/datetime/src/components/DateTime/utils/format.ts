import { format as formatFNS, parse } from 'date-fns';

import { TDatetime } from '../../declarations';

export const getFormatTimeStr = (hasSeconds = true, hasMillis = false) =>
  hasSeconds ? (hasMillis ? 'HH:mm:ss.sss' : 'HH:mm:ss') : 'HH:mm';

export const formatDate = ({
  ts,
  format,
  hasMillis = false,
  hasSeconds = true,
  hasTime = true,
}: {
  format?: string;
  hasMillis?: boolean;
  hasSeconds?: boolean;
  hasTime?: boolean;
  ts: TDatetime;
}): string => {
  const formatStr =
    format ||
    `yyyy-MM-dd${hasTime ? ` ${getFormatTimeStr(hasSeconds, hasMillis)}` : ''}`;
  return formatFNS(ts, formatStr);
};

export const isValidFormat = (
  dateStr: string,
  validFormats: string[] = ['yyyy-MM-ss HH:mm:ss'],
) => {
  for (const format of validFormats) {
    try {
      const fechaParseada = parse(dateStr, format, new Date());
      if (!isNaN(fechaParseada.getTime())) {
        return true;
      }
    } catch (e) {
      return false;
    }
  }
  return false;
};

import { format } from 'date-fns';
import { tz as tzFn } from '@date-fns/tz';

export const defaultDateRepr = (tz: string) => (ts: number) =>
  format(ts, 'PPPP', { in: tzFn(tz) });

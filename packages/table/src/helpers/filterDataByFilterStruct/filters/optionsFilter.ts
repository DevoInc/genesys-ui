import type { TOptionsFilterValue } from '../../../filters';

export const optionsFilter = (data: string, { value }: TOptionsFilterValue) =>
  value.length === 0 ? true : value.map(({ value: val }) => val).includes(data);

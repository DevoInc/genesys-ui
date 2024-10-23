import { TNumberFilterValue } from '../../filters';

export const numberTextFilter = (
  data: number,
  { value }: TNumberFilterValue,
) =>
  value === ''
    ? true
    : isNaN(String(value))
      ? false
      : String(data).includes(String(value));


import type { TOptionsFilterValue } from '../../filters';

export const optionsFilter = (
  data: string | string[],
  { value }: TOptionsFilterValue,
) =>
  value.length === 0
    ? true
    : Array.isArray(data)
      ? data.some((dataItem) =>
          value.map(({ value: val }) => val).includes(dataItem),
        )
      : value.map(({ value: val }) => val).includes(data);

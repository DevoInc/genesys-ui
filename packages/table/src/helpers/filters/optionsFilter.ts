import type { TOptionsFilterValue } from '../../filters';

const compareArray = (array1, array2) => {
  if (array1.length < array2.length) {
    return false;
  }
  return array2.every((elemento) => array1.includes(elemento));
};

export const optionsFilter = (
  data: string | string[],
  { value }: TOptionsFilterValue,
) => {
  return value.length === 0
    ? true
    : Array.isArray(data)
      ? compareArray(
          data,
          value.map(({ value: val }) => val),
        )
      : value.map(({ value: val }) => val).includes(data);
};

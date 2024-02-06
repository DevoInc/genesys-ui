import { OptionsFilterValue } from '../../../filters';

export const optionsFilter = (data: string, { value }: OptionsFilterValue) =>
  value.length === 0 ? true : value.map(({ value: val }) => val).includes(data);

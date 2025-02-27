import { TNumberFilterValue } from '../../filters';

export const numberTextFilter = (data: number, search: string) =>
  search === '' ? true : isNaN(search) ? false : String(data).includes(search);

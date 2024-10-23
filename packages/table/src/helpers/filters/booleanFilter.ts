import { TBooleanFilterValue } from '../../filters';

export const booleanFilter = (data: boolean, { value }: TBooleanFilterValue) =>
  value === '' ||
  (value === 'true' && data === true) ||
  (value === 'false' && data === false);

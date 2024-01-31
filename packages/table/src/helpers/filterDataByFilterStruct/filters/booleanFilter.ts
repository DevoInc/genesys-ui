import { BooleanFilterValue } from '../../../filters';

export const booleanFilter = (data: boolean, { value }: BooleanFilterValue) =>
  value === '' ||
  (value === 'true' && data === true) ||
  (value === 'false' && data === false);

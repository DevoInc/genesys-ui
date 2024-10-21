import { TBooleanFilterValue } from '../../filters';

export const booleanTextFilter = (data: boolean, { value }: TBooleanFilterValue) =>
  value === '' ||
  (value === 'true' && data === true) ||
  (value === 'false' && data === false);

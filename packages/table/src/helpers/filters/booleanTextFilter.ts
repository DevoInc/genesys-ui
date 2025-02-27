import { TBooleanFilterValue } from '../../filters';

export const booleanTextFilter = (data: boolean, search: string) =>
  search === '' ||
  (search.toLowerCase() === 'true' && data === true) ||
  (search.toLowerCase() === 'false' && data === false) ||
  (search.toLowerCase() === 'yes' && data === true) ||
  (search.toLowerCase() === 'no' && data === false);

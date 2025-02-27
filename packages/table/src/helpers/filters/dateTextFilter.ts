import { type TColDef } from '../../declarations';
import { date } from '../../presets/column/date';

export const dateTextFilter = (
  data: unknown,
  search: string,
  colDef: TColDef
) => {
  if (search === '') {
    return true;
  }
  const cdef = Object.assign({}, date, colDef);
  return cdef.valueFormatter(data, cdef.context).includes(search.toLowerCase());
};

import type { TTextFilterValue } from '../../filters';
import type { TFilterColumn } from './declarations';

export const updateFilterStruct = (
  filterStruct: TFilterColumn[],
  id: string,
  value: TTextFilterValue,
  type: string,
): TFilterColumn[] => {
  const prev = filterStruct.find((col) => col.id === id);
  if (prev && value !== null) {
    return filterStruct.map((col) =>
      col.id === id ? { id, value, type } : col,
    );
  } else if (prev && value === null) {
    return filterStruct.filter((col) => col.id !== id);
  }
  return filterStruct.concat({ id, value, type });
};

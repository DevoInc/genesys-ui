import { FilterValue } from '../../filters';
import { FilterColumn } from './declarations';

export const updateFilterStruct = (
  filterStruct: FilterColumn[],
  id: string,
  value: FilterValue,
  type: string,
): FilterColumn[] => {
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

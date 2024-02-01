import { ColDef } from '../../declarations';
import { FilterColumn } from '../../hooks';

export const filterColDefsByFilterStruct = (
  colDefs: ColDef[],
  filterStruct: FilterColumn[],
) =>
  colDefs.map((col) => {
    const idx = filterStruct.findIndex((filter) => filter.id === col.id);
    if (idx >= 0) {
      return {
        ...col,
        context: {
          ...col.context,
          filterValue: filterStruct[idx].value,
        },
      };
    }
    return col;
  });

import type { TColDef } from '../../declarations';
import { TFilterColumn } from '../../hooks/useFilterStruct/declarations';

export const updateColDefsWithFilterStruct = (
  colDefs: TColDef[],
  filterStruct: TFilterColumn[],
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

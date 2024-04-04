import type { TColDef } from '../../declarations';
import type { TOrderColumn } from '../../hooks';

export const updateColDefsWithOrderStruct = (
  colDefs: TColDef[],
  orderStruct: TOrderColumn[],
) =>
  colDefs.map((col) => {
    const index = orderStruct.findIndex((iter) => iter.id === col.id);
    return index !== -1
      ? {
          ...col,
          sort: orderStruct[index].sort,
          sortIndex: orderStruct.length > 1 ? index + 1 : undefined,
        }
      : col;
  });

import { ColDef } from '../../declarations';
import { OrderColumn } from '../../hooks';

export const updateColDefsWithOrderStruct = (
  colDefs: ColDef[],
  orderStruct: OrderColumn[],
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

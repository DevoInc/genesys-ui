import type { TOrderColumn } from './declarations';

export const updateOrderStruct = (
  orderStruct: TOrderColumn[],
  id: string,
): TOrderColumn[] => {
  const prev = orderStruct.find((col) => col.id === id);
  if (prev?.sort === 'asc') {
    return orderStruct.map((col) =>
      col.id === id ? { id, sort: 'desc' } : col,
    );
  } else if (prev?.sort === 'desc') {
    return orderStruct.filter((col) => col.id !== id);
  }
  return orderStruct.concat({ id, sort: 'asc' });
};

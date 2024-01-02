import { OrderColumn } from '../hooks/useOrderStruct';

const order = (orderStruct, a, b) => {
  for (const { sort, id } of orderStruct) {
    if (typeof a[id] === 'number') {
      if (sort === 'asc' && a[id] - b[id] !== 0) {
        return a[id] - b[id];
      }
      if (sort === 'desc' && b[id] - a[id] !== 0) {
        return b[id] - a[id];
      }
    }

    if (typeof a[id] === 'string') {
      if (sort === 'asc' && a[id].localeCompare(b[id]) !== 0) {
        return a[id].localeCompare(b[id]);
      }
      if (sort === 'desc' && b[id].localeCompare(a[id]) !== 0) {
        return b[id].localeCompare(a[id]);
      }
    }
  }
};
export const orderDataByOrderStruct = (data, orderStruct: OrderColumn[]) => {
  if (orderStruct.length > 0) {
    const newData = data;
    return newData.sort((a, b) => order(orderStruct, a, b));
  }
  return data;
};

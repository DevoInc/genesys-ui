import * as React from 'react';

export type OrderColumn = {
  id: string;
  sort: 'asc' | 'desc';
};

export const useOrderStruct = (initial: OrderColumn[] = []) => {
  const [orderStruct, setOrderStruct] = React.useState<OrderColumn[]>(initial);

  const onSort = (id: string) => {
    let newOrderStruct = orderStruct.map((col) => ({ ...col }));

    const col = orderStruct.find((column) => column.id === id);
    if (col) {
      if (col.sort === 'asc') {
        newOrderStruct = newOrderStruct.map((column) =>
          column.id === id ? { ...column, sort: 'desc' } : col,
        );
      } else {
        newOrderStruct = newOrderStruct.filter((column) => column.id !== id);
      }
    } else {
      newOrderStruct = newOrderStruct.concat({ id, sort: 'asc' });
    }

    setOrderStruct(newOrderStruct);
  };

  return { orderStruct, onSort };
};

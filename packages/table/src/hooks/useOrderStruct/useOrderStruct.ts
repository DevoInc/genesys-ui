import * as React from 'react';

import { OrderColumn } from './declarations';
import { updateOrderStruct } from './updateOrderStruct';

export const useOrderStruct = (initial: OrderColumn[] = []) => {
  const [orderStruct, setOrderStruct] = React.useState<OrderColumn[]>(initial);

  const onSort = React.useCallback(
    (id: string) => {
      setOrderStruct(updateOrderStruct(orderStruct, id));
    },
    [orderStruct],
  );

  return { orderStruct, onSort };
};

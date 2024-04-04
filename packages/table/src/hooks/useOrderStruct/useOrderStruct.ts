import * as React from 'react';

import type { TOrderColumn } from './declarations';
import { updateOrderStruct } from './updateOrderStruct';

export const useOrderStruct = (initial: TOrderColumn[] = []) => {
  const [orderStruct, setOrderStruct] = React.useState<TOrderColumn[]>(initial);

  const onSort = React.useCallback(
    (id: string) => {
      setOrderStruct(updateOrderStruct(orderStruct, id));
    },
    [orderStruct],
  );

  return { orderStruct, onSort };
};

import * as React from 'react';

import type { TFilterColumn } from './declarations';
import { updateFilterStruct } from './updateFilterStruct';
import type { TTextFilterValue } from '../../filters';

export const useFilterStruct = (initial: TFilterColumn[] = []) => {
  const [filterStruct, setFilterStruct] =
    React.useState<TFilterColumn[]>(initial);

  const onFilter = React.useCallback(
    (id: string, value: TTextFilterValue, type: string) => {
      setFilterStruct(updateFilterStruct(filterStruct, id, value, type));
    },
    [filterStruct],
  );

  return { filterStruct, onFilter };
};

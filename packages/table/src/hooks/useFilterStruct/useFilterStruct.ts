import * as React from 'react';

import { FilterColumn } from './declarations';
import { updateFilterStruct } from './updateFilterStruct';
import { FilterValue } from '../../filters';

export const useFilterStruct = (initial: FilterColumn[] = []) => {
  const [filterStruct, setFilterStruct] =
    React.useState<FilterColumn[]>(initial);

  const onFilter = React.useCallback(
    (id: string, value: FilterValue, type: string) => {
      setFilterStruct(updateFilterStruct(filterStruct, id, value, type));
    },
    [filterStruct],
  );

  return { filterStruct, onFilter };
};

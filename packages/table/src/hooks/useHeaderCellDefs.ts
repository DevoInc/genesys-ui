import * as React from 'react';

import { THeaderCellDef } from '../declarations';
import { selectedHeaderCellDef } from '../helpers/headerCellDefs/selectedHeaderCellDef';
import { setKeySortColumn } from '../helpers/headerCellDefs/setKeySortColumn';

export const useHeaderCellDefs = (headerCellDefs) => {
  const [newHeaderCellDefs, setHeaderCellDefs] =
    React.useState<THeaderCellDef[]>(headerCellDefs);

  const selectedHeaderCell = (headerCellDef: THeaderCellDef) => {
    setHeaderCellDefs(
      selectedHeaderCellDef(newHeaderCellDefs, {
        colId: headerCellDef.colId,
      }),
    );
  };

  const sortColumn = ({ event, key, colDef, onSort }) => {
    setKeySortColumn({
      event,
      key,
      colDef,
      onSort,
    });
  };

  return {
    newHeaderCellDefs,
    selectedHeaderCell,
    sortColumn,
  };
};

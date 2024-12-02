import * as React from 'react';

import { THeaderCellDef } from '../declarations';
import { selectedHeaderCellDef } from '../helpers/headerCellDefs/selectedHeaderCellDef';

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

  return {
    newHeaderCellDefs,
    selectedHeaderCell,
  };
};

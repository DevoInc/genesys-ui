import * as React from 'react';

import type { TCellRenderer, TRowDef } from '../../declarations';

export const addAfterRowToRowDefs = (
  rowDefs: TRowDef[],
  id: string,
  afterRowRenderer:
    | React.FC<TCellRenderer>
    | (({ value, colDef, rowIndex, row }: TCellRenderer) => React.ReactNode),
  afterRowHeight: number,
) =>
  rowDefs?.concat({
    id: `afterRow-${id}`,
    hide: false,
    cellRenderer: afterRowRenderer,
    height: afterRowHeight,
  });

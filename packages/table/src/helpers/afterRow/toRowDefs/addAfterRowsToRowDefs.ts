import * as React from 'react';

import type { TCellRenderer, TRowDef } from '../../../declarations';
import { getRowDef } from '../../definitions';

export const addAfterRowsToRowDefs = (
  rowDefs: TRowDef[],
  afterRowIds: string[],
  afterRowRenderer:
    | React.FC<TCellRenderer>
    | (({ value, colDef, rowIndex, row }: TCellRenderer) => React.ReactNode),
  afterRowHeight: number,
) =>
  rowDefs
    .reduce(
      (prev, rowDef) =>
        afterRowIds.includes(rowDef.id) ? prev : prev.concat([rowDef]),
      [],
    )
    .concat(
      afterRowIds.map((id) => {
        const rowDef = getRowDef(rowDefs, id) ?? {};

        const defaultRowDef = {
          id,
          hide: true,
          cellRenderer: afterRowRenderer,
          height: afterRowHeight,
          preset: 'isAfterRow'
        };

        return { ...defaultRowDef, ...rowDef };
      }) as TRowDef[],
    );

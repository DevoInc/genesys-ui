import * as React from 'react';
import { TCellRenderer, TRowDef } from '../../declarations';

export const addAfterRowsToRowDefs = (
  rowDefs: TRowDef[],
  ids: string[],
  afterRowRenderer: React.FC<TCellRenderer>
  | (({ value, colDef, rowIndex, row }: TCellRenderer) => React.ReactNode),
  afterRowHeight: number,
) =>
  ids.map((id) => {
    const rowDef = getRowDef(rowDefs, id);

    const defaultRowDef = {
      id,
      hide: true,
      cellRenderer: afterRowRenderer,
      height: afterRowHeight,
    };

    return rowDef
      ? { ...defaultRowDef, ...rowDef }
      : {
          id,
          hide: true,
          cellRenderer: afterRowRenderer,
          height: afterRowHeight,
        };
  }) as TRowDef[];

export const getRowDef = (rowDefs: TRowDef[], id: string) =>
  rowDefs?.find((r) => r.id === id);

export const addAfterRowToRowDefs = (
  rowDefs: TRowDef[],
  id,
  afterRowRenderer,
  afterRowHeight,
) =>
  rowDefs?.concat({
    id: `afterRow-${id}`,
    hide: false,
    cellRenderer: afterRowRenderer,
    height: afterRowHeight,
  });

export const setHideRowDef = (rowDefs: TRowDef[], id, isOpened) =>
  rowDefs?.map((rowDef: TRowDef) => {
    if (rowDef.id === `afterRow-${id}`) {
      rowDef.hide = !isOpened;
    }
    return rowDef;
  });

/* eslint-disable indent */

import { TRow } from '../../declarations';
import { TOrderColumn } from '../../hooks/useOrderStruct/declarations';
import { numberSorter, stringSorter } from './sorters';

export type TCustomSortFn = (a: TRow, b: TRow, sort: 'asc' | 'desc') => number;

export type TCustomSortFns = {
  [key: string]: TCustomSortFn;
};

export const orderDataByOrderStruct =
  (orderStruct: TOrderColumn[], customSortFns: TCustomSortFns = {}) =>
  (a: TRow, b: TRow) => {
    for (const { sort, id } of orderStruct) {
      if (Object.keys(customSortFns).includes(id)) {
        const result = customSortFns[id](a, b, sort);
        if (result !== 0) {
          return result;
        }
      }

      if (typeof a[id] === 'number') {
        const result = numberSorter(Number(a[id]), Number(b[id]), sort);
        if (result !== 0) {
          return result;
        }
      }

      if (typeof a[id] === 'string') {
        const result = stringSorter(String(a[id]), String(b[id]), sort);
        if (result !== 0) {
          return result;
        }
      }
    }
    return 0;
  };

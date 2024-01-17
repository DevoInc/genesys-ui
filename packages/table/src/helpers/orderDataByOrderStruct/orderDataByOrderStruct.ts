/* eslint-disable indent */

import { Row } from '../../declarations';
import { OrderColumn } from '../../hooks';
import { numberSorter, stringSorter } from './sorters';

export type CustomSortFn = (a: Row, b: Row, sort: 'asc' | 'desc') => number;

export type CustomSortFns = {
  [key: string]: CustomSortFn;
};

export const orderDataByOrderStruct =
  (orderStruct: OrderColumn[], customSortFns: CustomSortFns = {}) =>
  (a: Row, b: Row) => {
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

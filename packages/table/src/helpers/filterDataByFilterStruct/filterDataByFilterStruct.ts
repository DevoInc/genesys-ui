/* eslint-disable indent */

import { Row } from '../../declarations';
import { NumberFilterValue, TextFilterValue } from '../../filters';
import { BooleanFilterValue } from '../../filters/BooleanFilter/declarations';
import { FilterColumn } from '../../hooks';
import { booleanFilter, numberFilter, textFilter } from './filters';

export type CustomFilterFn = (a: Row, b: Row, sort: 'asc' | 'desc') => number;

export type CustomFilterFns = {
  [key: string]: CustomFilterFn;
};

export const filterDataByFilterStruct =
  (filterStruct: FilterColumn[], customFilterFns: CustomFilterFns = {}) =>
  (a: Row) => {
    for (const { value, id, type } of filterStruct) {
      // if (Object.keys(customFilterFns).includes(id)) {
      //   const result = customFilterFns[id](a, b, sort);
      //   if (result !== 0) {
      //     return result;
      //   }
      // }

      // if (typeof a[id] === 'number') {
      //   const result = numberSorter(Number(a[id]), Number(b[id]), sort);
      //   if (result !== 0) {
      //     return result;
      //   }
      // }
      //
      // if (typeof a[id] === 'string') {
      //   const result = stringSorter(String(a[id]), String(b[id]), sort);
      //   if (result !== 0) {
      //     return result;
      //   }
      // }
      if (type === 'text') {
        return textFilter(String(a[id]), value as TextFilterValue);
      } else if (type === 'number') {
        return numberFilter(Number(a[id]), value as NumberFilterValue);
      } else if (type === 'boolean') {
        return booleanFilter(!!a[id], value as BooleanFilterValue);
      }
    }
    return true;
  };

/* eslint-disable indent */

import { Row } from '../../declarations';
import { FilterValue, NumberFilterValue, TextFilterValue } from '../../filters';
import { BooleanFilterValue } from '../../filters/BooleanFilter/declarations';
import { FilterColumn } from '../../hooks';
import { booleanFilter, numberFilter, textFilter } from './filters';

export type CustomFilterFn = (
  data: unknown,
  filterValue: FilterValue,
) => boolean;

export type CustomFilterFns = {
  [key: string]: CustomFilterFn;
};

export const filterDataByFilterStruct =
  (filterStruct: FilterColumn[], customFilterFns: CustomFilterFns = {}) =>
  (a: Row) => {
    for (const { value, id, type } of filterStruct) {
      if (Object.keys(customFilterFns).includes(id)) {
        const res = customFilterFns[id](a[id], value);
        if (!res) {
          return false;
        }
      }

      if (type === 'text') {
        const res = textFilter(String(a[id]), value as TextFilterValue);
        if (!res) {
          return false;
        }
      }

      if (type === 'number') {
        const res = numberFilter(Number(a[id]), value as NumberFilterValue);
        if (!res) {
          return false;
        }
      }
      if (type === 'boolean') {
        const res = booleanFilter(!!a[id], value as BooleanFilterValue);
        if (!res) {
          return false;
        }
      }
    }
    return true;
  };

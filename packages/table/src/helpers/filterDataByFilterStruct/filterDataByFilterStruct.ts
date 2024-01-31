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
        return customFilterFns[id](a[id], value);
      }

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

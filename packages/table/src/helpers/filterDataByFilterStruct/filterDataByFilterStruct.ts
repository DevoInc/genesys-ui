/* eslint-disable indent */

import { Row } from '../../declarations';
import {
  FilterValue,
  NumberFilterValue,
  OptionsFilterValue,
  TextFilterValue,
  BooleanFilterValue,
} from '../../filters';
import { FilterColumn } from '../../hooks';
import {
  booleanFilter,
  numberFilter,
  optionsFilter,
  textFilter,
} from './filters';

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
      if (type === 'options') {
        const res = optionsFilter(a[id] as string, value as OptionsFilterValue);
        if (!res) {
          return false;
        }
      }
    }
    return true;
  };

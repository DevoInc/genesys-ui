/* eslint-disable indent */

import type { TRow, TFilterValue } from '../../declarations';
import {
  TNumberFilterValue,
  type TOptionsFilterValue,
  type TTextFilterValue,
  TBooleanFilterValue,
} from '../../filters';
import type { TFilterColumn } from '../../hooks';
import {
  booleanFilter,
  numberFilter,
  optionsFilter,
  textFilter,
} from './filters';

export type TCustomFilterFn = (
  data: unknown,
  filterValue: TFilterValue,
) => boolean;

export type CustomFilterFns = {
  [key: string]: TCustomFilterFn;
};

export const filterDataByFilterStruct =
  (filterStruct: TFilterColumn[], customFilterFns: CustomFilterFns = {}) =>
  (a: TRow) => {
    for (const { value, id, type } of filterStruct) {
      if (Object.keys(customFilterFns).includes(id)) {
        const res = customFilterFns[id](a[id], value);
        if (!res) {
          return false;
        }
      }

      if (type === 'text') {
        const res = textFilter(String(a[id]), value as TTextFilterValue);
        if (!res) {
          return false;
        }
      }

      if (type === 'number') {
        const res = numberFilter(Number(a[id]), value as TNumberFilterValue);
        if (!res) {
          return false;
        }
      }
      if (type === 'boolean') {
        const res = booleanFilter(!!a[id], value as TBooleanFilterValue);
        if (!res) {
          return false;
        }
      }
      if (type === 'options') {
        const res = optionsFilter(
          a[id] as string,
          value as TOptionsFilterValue,
        );
        if (!res) {
          return false;
        }
      }
    }
    return true;
  };

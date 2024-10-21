/* eslint-disable indent */

import type { TRow, TFilterValue } from '../declarations';
import { getColDef } from './definitions';
import type {
  TNumberFilterValue,
  TOptionsFilterValue,
  TBooleanFilterValue,
  TTextFilterValue,
} from '../filters';
import {
  booleanTextFilter,
  numberTextFilter,
  optionsTextFilter,
  textFilter,
} from './filters';

export const valueFilter = (colDef : TColDef, searchText: string, value: TFilterValue) => {
  const type = colDef?.preset || 'text';
  if (type === 'text' && textFilter(String(value), {value:searchText,operator:'contains'} as TTextFilterValue))
    return true;

  if (type === 'number' && numberTextFilter(value, {value:searchText} as TNumberFilterValue))
    return true;

  if (type === 'boolean' && booleanTextFilter(value, {value:searchText} as TBooleanFilterValue))
    return true;

  if (type === 'options' && optionsTextFilter(value, {value:searchText} as TOptionsFilterValue, colDef))
    return true;

  return false;
};

export const filterDataByText =
  (
    searchText: string,
    colDefs: TColDef[],
    restrictedColumns: string[] = colDefs.map((colDef) => colDef.id),
  ) =>
  (a: TRow) => {
    if (!searchText) return true;
    for (const colId of restrictedColumns) {
      const colDef = getColDef(colDefs, colId);
      if (valueFilter(colDef, searchText, a[colId]))
        return true;
    }
    return false;
  };

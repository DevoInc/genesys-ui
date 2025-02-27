import type { TRow, TFilterValue, TColDef } from '../declarations';
import { getColDef } from './definitions';
import type {
  TNumberFilterValue,
  TBooleanFilterValue,
  TTextFilterValue,
} from '../filters';
import {
  booleanTextFilter,
  numberTextFilter,
  optionsTextFilter,
  textFilter,
  userTextFilter,
} from './filters';
import { TSelectOption } from '@devoinc/genesys-ui';

export const valueFilter = (
  colDef: TColDef,
  searchText: string,
  value: TFilterValue,
) => {
  const type = colDef?.preset || 'text';
  if (
    type === 'text' &&
    textFilter(String(value), {
      value: searchText,
      operator: 'contains',
    } as TTextFilterValue)
  ) {
    return true;
  }

  if (
    type === 'number' &&
    numberTextFilter(Number(value), { value: searchText } as TNumberFilterValue)
  ) {
    return true;
  }

  if (
    type === 'boolean' &&
    booleanTextFilter(Boolean(value), {
      value: searchText,
    } as TBooleanFilterValue)
  ) {
    return true;
  }

  if (
    type === 'options' &&
    optionsTextFilter(
      String(value),
      { value: searchText } as TSelectOption,
      colDef,
    )
  ) {
    return true;
  }

  if (type === 'user' && userTextFilter(String(value), searchText, colDef)) {
    return true;
  }

  return false;
};

export const filterDataByText =
  (
    searchText: string,
    colDefs: TColDef[],
    restrictedColumns: string[] = colDefs.map((colDef) => colDef.id),
  ) =>
  (a: TRow) => {
    if (!searchText) {
      return true;
    }
    for (const colId of restrictedColumns) {
      const colDef = getColDef(colDefs, colId);
      const value = colDef.valueFormatter
        ? colDef.valueFormatter(a[colId], colDef.context)
        : a[colId];
      if (valueFilter(colDef, searchText, value as TFilterValue)) {
        return true;
      }
    }
    return false;
  };

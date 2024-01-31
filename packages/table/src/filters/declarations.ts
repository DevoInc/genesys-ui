import { ColDef, Data } from '../declarations';

export type FilterValue = {
  [key: string]: unknown;
};

export type FilterProps = {
  colDef?: ColDef;
  data?: Data;
  onChange: (value: FilterValue, type: string) => void;
};

export type FilterContext = {
  filterValue: FilterValue;
};

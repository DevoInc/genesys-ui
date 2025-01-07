import type { TOptionsFilterValue } from '../../filters';

export const optionsTextFilter = (
  data: string,
  { value }: TOptionsFilterValue,
  colDef: TColDef,
) =>
  value === ''
    ? true
    : String(data).toLowerCase().includes(String(value).toLowerCase())
      ? true
      : data && colDef?.context?.options[data]
        ? colDef.context.options[data].label
            .toLowerCase()
            .includes(value.toLowerCase())
        : false;

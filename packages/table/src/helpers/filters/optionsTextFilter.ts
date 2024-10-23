import type { TOptionsFilterValue } from '../../filters';

export const optionsTextFilter = (data: string, { value }: TOptionsFilterValue, colDef: TColDef) =>
  value === ''
    ? true
    : String(data).includes(String(value))
      ? true
      : colDef?.context?.options[data].label.toLowerCase()
      .includes(value.toLowerCase());


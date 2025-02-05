import type { TSelectOption } from '@devoinc/genesys-ui';
import { type TColDef } from '../../declarations';

export const optionsTextFilter = (
  data: string,
  value: TSelectOption,
  colDef: TColDef,
) =>
  value.value === ''
    ? true
    : String(data).toLowerCase().includes(String(value).toLowerCase())
      ? true
      : data && colDef?.context?.options[data]
        ? colDef.context.options[data].label
            .toLowerCase()
            .includes(value.toLowerCase())
        : false;

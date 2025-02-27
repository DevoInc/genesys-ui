import type { TSelectOption } from '@devoinc/genesys-ui';
import { type TColDef } from '../../declarations';

const optionHasText = (option, text: string, context?: TContextOptions) =>
  option && context?.options[option]
    ? context.options[option].label.toLowerCase().includes(text.toLowerCase())
    : false;

export const optionsTextFilter = (
  data: string,
  search: string,
  colDef: TColDef
) =>
  search === ''
    ? true
    : Array.isArray(data)
      ? data.some((option) => optionHasText(option, search, colDef?.context))
      : optionHasText(data, search, colDef?.context);

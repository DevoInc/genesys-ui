import { TSelectOption } from '@devoinc/genesys-ui';

import { TContextOptions } from './ContextOptions';

export const getSelectOptions = (options: TContextOptions = {}) =>
  Object.entries(options).map(([key, option]) => ({
    label: option?.label ?? key,
    value: key,
  })) as TSelectOption[];

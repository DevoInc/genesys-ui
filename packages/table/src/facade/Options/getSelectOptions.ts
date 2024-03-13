import { TSelectOption } from '@devoinc/genesys-ui';

import { ContextOptions } from './ContextOptions';

export const getTSelectOptions = (options: ContextOptions = {}) =>
  Object.entries(options).map(([key, option]) => ({
    label: option?.label ?? key,
    value: key,
  })) as TSelectOption[];

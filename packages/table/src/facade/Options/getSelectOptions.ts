import { SelectOption } from '@devoinc/genesys-ui';

import { ContextOptions } from './ContextOptions';

export const getSelectOptions = (options: ContextOptions = {}) =>
  Object.entries(options).map(([key, option]) => ({
    label: option?.label ?? key,
    value: key,
  })) as SelectOption[];

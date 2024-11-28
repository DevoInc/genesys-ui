import { TSelectOption } from '@devoinc/genesys-ui';

import { TContextOptions } from '../../renderers';

export const getSelectOptions = (options: TContextOptions['options'] = {}) =>
  Object.entries(options).map(([key, option]) => ({
    label: option?.label ?? key,
    value: key,
  })) as TSelectOption[];

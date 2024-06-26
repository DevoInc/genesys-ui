import type { TSelectOption } from '@devoinc/genesys-ui';

import type { TData } from '../declarations';

export const getOptionsFromData = (
  data: TData,
  id: string,
): TSelectOption[] => {
  const result: TSelectOption[] = [];
  const cache = [];
  for (const row of data) {
    // Get the current value of the row
    const value = String(row[id]);
    if (!cache.includes(value)) {
      cache.push(value);
      // Get the label from the options of the current value
      result.push({ label: value, value });
    }
  }
  return result;
};

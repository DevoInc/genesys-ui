import type { Data } from '../declarations';

export const getOptionsFromData = (data: Data, id: string) => {
  const result = [];
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

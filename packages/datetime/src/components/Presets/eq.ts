import type { TDateRange } from '../../declarations';

export const arePresetValuesEqual = (a: TDateRange, b: TDateRange) =>
  a?.length === b?.length
    ? a.every((item, index) =>
        typeof item === typeof b[index]
          ? typeof item === 'number' || typeof item === 'string'
            ? item === b[index]
            : item instanceof Date && b[index] instanceof Date
              ? item.getTime() === b[index].getTime()
              : false
          : false,
      )
    : false;

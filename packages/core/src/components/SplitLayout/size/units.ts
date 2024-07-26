export const isPixels = (size: string | number) =>
  typeof size === 'number'
    ? true
    : size.substring(size.length - 2, size.length) === 'px';

export const getPixels = (size: string) =>
  Number(size.substring(0, size.length - 2));

export const isPercentage = (size: string | number) =>
  typeof size === 'number'
    ? false
    : size.substring(size.length - 1, size.length) === '%';

export const getPercentage = (size: string): number =>
  Number(size.substring(0, size.length - 1));

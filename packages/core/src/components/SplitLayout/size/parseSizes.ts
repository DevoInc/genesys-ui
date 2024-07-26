import type { TSizes } from '../declarations';
import { isPixels, getPixels, isPercentage, getPercentage } from './units';

export const parseSizes = (sizes: TSizes, totalSize: number): number[] => {
  let leftSize = totalSize;
  const rest = [];
  // Subtract all pixels & percentages
  const result = sizes.map((size, idx) => {
    if (isPixels(size)) {
      const pixels = typeof size === 'number' ? size : getPixels(size);
      leftSize -= pixels;
      return pixels;
    } else if (isPercentage(size)) {
      const pixels = (totalSize * getPercentage(size as string)) / 100;
      leftSize -= pixels;
      return pixels;
    }
    rest.push(idx);
    return 0;
  });
  // Get the part of the left size
  const leftPart = leftSize / rest.length;
  // Assign the part to each 'auto' element
  rest.forEach((idx) => {
    result[idx] = leftPart;
  });
  return result;
};

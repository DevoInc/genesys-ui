import { interpolateItems } from '../array';
import type { TSizes } from '../declarations';

export const getSizesWithSeparators = (sizes: TSizes, separatorSize: number) =>
  interpolateItems(sizes, () => separatorSize) as TSizes;

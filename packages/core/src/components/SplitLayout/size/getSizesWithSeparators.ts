import { interpolateItems } from '../array';
import type { TSizes } from '../declarations';

export const getSizesWithSeparators = (sizes: TSizes, separatorSize: number) =>
  interpolateItems(
    sizes,
    () => separatorSize,
    (x: number) => x - separatorSize / 2,
  ) as TSizes;

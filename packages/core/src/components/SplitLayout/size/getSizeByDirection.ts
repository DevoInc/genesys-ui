import type { TDirection, TSize } from '../declarations';

export const getSizeByDirection = (direction: TDirection, size: TSize) =>
  direction === 'vertical' ? size.height : size.width;

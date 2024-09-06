import type { TSizes } from '../declarations';

export const getDefaultSize = (childrenNumber: number): TSizes => {
  const portion = 100 / childrenNumber;
  return Array.from({ length: childrenNumber }).fill(`${portion}%`) as TSizes;
};

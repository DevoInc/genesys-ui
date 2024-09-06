import type { TSizes } from "../declarations";

export const fillSizes = (sizes: TSizes, n: number) =>
  sizes.length < n
    ? [...sizes, ...Array.from({ length: n - sizes.length }).fill('auto')]
    : sizes.length > n
      ? sizes.slice(0, n)
      : sizes;

import type { TSizes } from '../declarations';

export const getCSSGridTemplate = (sizes: TSizes) =>
  sizes.map((size) => (typeof size === 'number' ? `${size}px` : size)).join(' ');

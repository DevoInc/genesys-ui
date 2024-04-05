import { COLORS as defaultColors } from './colors';
import type { IColor } from './definitions';
import { findColorByName } from './getters';

export const isValidColorName = (colors: IColor[]) => (name: string) =>
  !!findColorByName(colors)(name);

/**
 * Based in the color value returns if the color exists or not
 *
 * @param color - The color value: rgb(0,0,0), #000, black...
 */
export const isValidColor = (color: string) =>
  color &&
  (color === 'transparent' ||
    color.startsWith('#') ||
    color.startsWith('rgb') ||
    color.startsWith('rgba') ||
    isValidColorName(defaultColors)(color));

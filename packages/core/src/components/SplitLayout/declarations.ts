export type TSize = { width: number; height: number } | undefined;

export type TDirection = 'vertical' | 'horizontal';

/** Sizes could be in pixels, or percentage and special one 'auto'
 * for example: ['250px', '50%', 'auto']
 * pixels could be expressed as '250px' or 250 number
 * for example: [250, '50%', 'auto'] is the same as before */
export type TSizes = (string | number)[];

export type TOnChangeFn = (
  sizes: TSizes,
  index: number,
  delta: number,
  isEnd: boolean,
) => void;

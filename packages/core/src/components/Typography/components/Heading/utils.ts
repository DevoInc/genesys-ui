import { TTypoBodySize, TTypoHeadingSize, TTypoSize } from "../../../../declarations";
import { THeadingType, TTypoCategories } from "../../declarations";

/**
 * Get the heading category name based in type prop
 *
 * @param typeProp h1, h2, hero-sm... etc.
 * @return category name
 */
export const getCategory = (typeProp: THeadingType): TTypoCategories => {
  if (typeProp?.startsWith('hero')) return 'hero';
  if (typeProp?.startsWith('overline')) return 'overline';
  return 'heading';
};

/**
 * Get the heading type name based in type prop
 *
 * @param typeProp h1, h2, hero-sm... etc.
 * @return type name
 */
export const getType = (typeProp: THeadingType): TTypoSize => {
  const hyphenPos = typeProp.indexOf('-');
  if (hyphenPos > -1) return typeProp.substring(hyphenPos + 1) as TTypoBodySize;
  return typeProp as TTypoHeadingSize;
};

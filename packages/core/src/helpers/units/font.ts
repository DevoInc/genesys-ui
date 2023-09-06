// Get the document font-size
const getBaseFs = () =>
  typeof window !== 'undefined'
    ? parseInt(window.getComputedStyle(document.documentElement).fontSize, 10)
    : null;

/**
 * Returns the size number in px without units
 *
 * @param remSize The size value: 2rem, 4.8rem... etc.
 * @return the size in px number value (in base 10): 20, 48... etc.
 */
export const getPxFromRem = (remSize: string) => {
  const isRemUnit = remSize.indexOf('rem') > -1;
  return parseFloat(remSize) * (isRemUnit ? getBaseFs() : 1);
};

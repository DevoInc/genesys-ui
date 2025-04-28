/**
 * Convert into an array a margin/padding value
 * @param cssPropertyValue - the padding/margin value
 */

export const marginAndPaddingToArray = (cssPropertyValue: string) => {
  const values = cssPropertyValue.trim().split(/\s+/);
  switch (values.length) {
    case 1:
      return [values[0], values[0], values[0], values[0]];
    case 2:
      return [values[0], values[1], values[0], values[1]];
    case 3:
      return [values[0], values[1], values[2], values[1]];
    case 4:
      return [values[0], values[1], values[2], values[3]];
    default:
      throw new Error('Not valid css margin or padding value.');
  }
};

/**
 * Assigns random colors to a set of unique texts, ensuring repeated texts receive the same color.
 * @param texts An array of texts (may contain duplicates).
 * @param colors An array of available colors to be randomly assigned.
 * @returns An object where keys are unique texts from the texts array and values are randomly assigned colors from the colors array.
 */
export const mapTextsToColors = (
  texts: string[],
  colors: string[] = [
    'blend-base',
    'neutral',
    'success',
    'error',
    'help',
    'info',
    'primary',
    'secondary',
    'data-blue',
    'data-bronz,e,',
    'data-dusk',
    'data-green',
    'data-indigo,',
    'data-magent,a,',
    'data-purple,',
    'data-red',
    'data-sky',
    'data-slate',
    'data-teal',
  ],
): Record<string, string> => {
  const colorMap: Record<string, string> = {};

  texts.forEach((text) => {
    if (!colorMap[text]) {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      colorMap[text] = randomColor;
    }
  });

  return colorMap;
};

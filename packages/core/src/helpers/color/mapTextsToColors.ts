/**
 * Assigns random colors to a set of unique texts, ensuring repeated texts receive the same color.
 * @param texts An array of texts (may contain duplicates).
 * @param colors An array of available colors to be randomly assigned.
 * @returns An object where keys are unique texts from the texts array and values are randomly assigned colors from the colors array.
 */
export const mapTextsToColors = (
  texts: string[],
  colors: string[] = [
    'info',
    'data-green',
    'data-bronze',
    'data-dusk',
    'data-magenta',
    'data-sky',
    'data-indigo',
    'data-teal',
    'data-slate',
    'data-red',
  ],
): Record<string, string> => {
  const colorMap: Record<string, string> = {};

  texts.forEach((text) => {
    if (!colorMap[text]) {
      colorMap[text] = mapTextToColor(text, colors);
    }
  });

  return colorMap;
};

export const mapTextToColor = (
  text: string,
  colors: string[] = [
    'info',
    'data-green',
    'data-bronze',
    'data-dusk',
    'data-magenta',
    'data-sky',
    'data-indigo',
    'data-teal',
    'data-slate',
    'data-red',
  ],
): string => {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = text.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % colors.length;
  return colors[index];
};

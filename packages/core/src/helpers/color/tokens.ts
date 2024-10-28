// colorScheme could be 'blend-base', 'data-green', ...
// and in tokens the colorSchemes are 'blendBase', 'dataGreen', ...
export const getTokenKeyFromColorScheme = (colorScheme: string) =>
  colorScheme
    .split('-')
    .map((chunk, index) =>
      index === 0 ? chunk : `${chunk[0].toUpperCase()}${chunk.slice(1)}`,
    )
    .join('');

export const numberSorter = (
  a: number,
  b: number,
  sort: 'asc' | 'desc' = 'asc',
) => (sort === 'asc' ? a - b : b - a);

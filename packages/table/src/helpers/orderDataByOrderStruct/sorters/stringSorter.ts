export const stringSorter = (
  a: string,
  b: string,
  sort: 'asc' | 'desc' = 'asc',
) => (sort === 'asc' ? a.localeCompare(b) : b.localeCompare(a));

export const isSelected = (ts: number, [from, to]: [number, number]) =>
  ts === from || ts === to;

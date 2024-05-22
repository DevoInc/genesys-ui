export const WEEK_DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export const rotateWeekDays = (arr: string[], n: number) =>
  n === 0 ? arr : arr.slice(n).concat(arr.slice(0, n));

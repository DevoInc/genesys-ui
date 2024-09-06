import { compareAsc } from 'date-fns';

type T = number | Date;

export const gt = (a: T, b: T) => compareAsc(a, b) > 0;
export const gte = (a: T, b: T) => compareAsc(a, b) >= 0;
export const lt = (a: T, b: T) => compareAsc(a, b) < 0;
export const lte = (a: T, b: T) => compareAsc(a, b) <= 0;

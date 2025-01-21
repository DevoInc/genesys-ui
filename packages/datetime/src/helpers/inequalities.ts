import { compareAsc } from 'date-fns';

import type { TDate } from '../declarations';

/** Date `a` is greatter than `b` */
export const gt = (a: TDate, b: TDate) => compareAsc(a, b) > 0;

/** Date `a` is greatter or equal than `b` */
export const gte = (a: TDate, b: TDate) => compareAsc(a, b) >= 0;

/** Date `a` is lower than `b` */
export const lt = (a: TDate, b: TDate) => compareAsc(a, b) < 0;

/** Date `a` is lower or equal than `b` */
export const lte = (a: TDate, b: TDate) => compareAsc(a, b) <= 0;

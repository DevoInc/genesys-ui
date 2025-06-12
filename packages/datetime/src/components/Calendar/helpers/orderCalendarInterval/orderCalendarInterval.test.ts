import { describe, test, expect } from 'vitest';

import { orderCalendarInterval } from './orderCalendarInterval';
import { TCalendarDate } from '../../../../declarations';

let a: Date;
let b: Date;

describe('isWithinCalendarInterval', () => {
  const cases: [
    string,
    TCalendarDate,
    TCalendarDate,
    { start: TCalendarDate; end: TCalendarDate },
  ][] = [
    [
      'a as start, b as end',
      (a = new Date(2025, 6, 10)),
      (b = new Date(2025, 6, 12)),
      { start: a, end: b },
    ],
    [
      'a as end, b as start',
      (a = new Date(2025, 6, 16)),
      (b = new Date(2025, 6, 12)),
      { start: b, end: a },
    ],
    [
      'same date',
      (a = new Date(2025, 6, 12, 0, 0, 0)),
      a,
      { start: a, end: a },
    ],
  ];

  test.each(cases)('%s', (_title, a, b, expected) => {
    expect(orderCalendarInterval(a, b)).toEqual(expected);
  });
});

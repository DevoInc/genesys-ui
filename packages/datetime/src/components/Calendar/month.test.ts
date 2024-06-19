import { describe, test, expect } from 'vitest';

import { getPrevDays, getMonthDays } from './month';

describe('Calendar', () => {
  describe('month', () => {
    describe('getMonthDays', () => {
      const cases: [string, number, number][] = [
        ['Dec 1th, 2022 has 31 days', new Date(2022, 11, 1).getTime(), 31],
        [
          'Nov 10th, 2022 has 30 prev days',
          new Date(2022, 10, 10).getTime(),
          30,
        ],
        [
          'Feb 28th, 2022 has 28 prev days',
          new Date(2022, 1, 28).getTime(),
          28,
        ],
      ];

      test.each(cases)('%s', (_title, ts, expected) => {
        expect(getMonthDays(ts)).toHaveLength(expected);
      });
    });

    describe('getPrevDays', () => {
      const cases: [string, number | Date, number, number][] = [
        ['Dec, 2024 has 0 prev days', new Date(2024, 11), 0, 0],
        ['Nov, 2024 has 5 prev days', new Date(2024, 10), 0, 5],
        ['Feb, 2024 has 4 prev days', new Date(2024, 1), 0, 4],
        [
          'Feb, 2024 starting on Monday has 3 prev days',
          new Date(2024, 1),
          1,
          3,
        ],
      ];

      test.each(cases)('%s', (_title, dt, weekStart, expected) => {
        expect(getPrevDays(dt, weekStart)).toEqual(expected);
      });
    });
  });
});

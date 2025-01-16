import { describe, test, expect } from 'vitest';

import { normalizeDate } from './normalizeDate';
import type { TDate } from '../../declarations';

describe('helpers', () => {
  describe('range', () => {
    describe('norm', () => {
      describe('normalizeDateRange', () => {
        const now = new Date();

        const cases: [string, TDate, string | number][] = [
          ['norm Date', now, now.getTime()],
          ['norm string', 'test', 'test'],
          ['norm number', 1, 1],
        ];

        test.each(cases)('%s', (_title, date, expected) => {
          expect(normalizeDate(date)).toBe(expected);
        });
      });
    });
  });
});

import { describe, test, expect } from 'vitest';

import { tryParseDateForCalendar } from './tryParseDateForCalendar';

const now = new Date();
describe('helpers', () => {
  describe('parser', () => {
    describe('tryParseDateForCalendar', () => {
      test('try parse date with invalid calendar result but valid parser result', () => {
        const tryParseDateFn = tryParseDateForCalendar((date) => {
          return {
            isValid: true,
            value: date,
            errors: [],
          };
        });
        expect(tryParseDateFn('hello')).toBeUndefined();
        expect(tryParseDateFn(0)).toBe(0);
        expect(tryParseDateFn(now)).toBe(now);
      });
    });
  });
});

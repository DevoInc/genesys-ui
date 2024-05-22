import { describe, test, expect } from 'vitest';

import { gt, gte, lt, lte } from './inequalities';

const now = new Date().getTime();
const SECOND = 1000;

describe('helpers', () => {
  describe('gt', () => {
    const cases: [string, number, number, boolean][] = [
      ['not greater than', now, now + SECOND, false],
      ['greater than', now + SECOND, now, true],
      ['equals', now, now, false],
    ];

    test.each(cases)('%s', (_title, a, b, expected) => {
      expect(gt(a, b)).toEqual(expected);
    });
  });

  describe('gte', () => {
    const cases: [string, number, number, boolean][] = [
      ['not greater than', now, now + SECOND, false],
      ['greater than', now + SECOND, now, true],
      ['equals', now, now, true],
    ];

    test.each(cases)('%s', (_title, a, b, expected) => {
      expect(gte(a, b)).toEqual(expected);
    });
  });

  describe('lt', () => {
    const cases: [string, number, number, boolean][] = [
      ['less than', now, now + SECOND, true],
      ['not less than', now + SECOND, now, false],
      ['equals', now, now, false],
    ];

    test.each(cases)('%s', (_title, a, b, expected) => {
      expect(lt(a, b)).toEqual(expected);
    });
  });

  describe('lte', () => {
    const cases: [string, number, number, boolean][] = [
      ['less than', now, now + SECOND, true],
      ['not less than', now + SECOND, now, false],
      ['equals', now, now, true],
    ];

    test.each(cases)('%s', (_title, a, b, expected) => {
      expect(lte(a, b)).toEqual(expected);
    });
  });
});

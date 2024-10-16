import { describe, test, expect } from 'vitest';
import { getLastPage } from './pages';

describe('helpers', () => {
  describe('pages', () => {
    describe('getLastPage', () => {
      const cases: [string, number, number, number][] = [
        ['pageSize < totalItems', 30, 5, 5],
        ['pageSize > totalItems', 30, 45, 0],
        ['pageSize null', 30, null, Infinity],
        ['totalItems null', null, 5, 0],
      ];

      test.each(cases)('%s', (_title, totalItems, pageSize, expected) => {
        expect(getLastPage(totalItems, pageSize)).toBe(expected);
      });
    });
  });
});

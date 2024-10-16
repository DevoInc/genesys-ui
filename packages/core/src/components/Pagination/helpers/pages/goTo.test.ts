import { describe, test, expect } from 'vitest';
import { goToLastPageFn, goToNextPageFn, goToPreviousPageFn } from './goTo';

describe('helpers', () => {
  describe('goTo', () => {
    describe('goToLastPageFn', () => {
      const cases: [string, number, number, number][] = [
        ['have two pages return go to page 1', 10, 5, 1],
        ['have one page return go to page 0', 10, 10, 0],
        ['have 100 pages return go to page 99', 100, 1, 99],
      ];

      test.each(cases)('%s', (_title, totalItems, pageSize, expected) => {
        expect(goToLastPageFn({ totalItems, pageSize })).toStrictEqual(
          expected,
        );
      });
    });

    describe('goToNextPageFn', () => {
      const cases: [string, number, number, number, number][] = [
        ['have two pages return go to page 1', 10, 5, 0, 1],
        ['have five pages return go to page 1', 10, 5, 5, 1],
      ];

      test.each(cases)('%s', (_title, totalItems, pageSize, page, expected) => {
        expect(goToNextPageFn({ totalItems, pageSize, page })).toStrictEqual(
          expected,
        );
      });
    });

    describe('goToNextPageFn', () => {
      const cases: [string, number, number, number, number][] = [
        ['have two pages return go to page 1', 10, 5, 1, 0],
        ['have five pages return go to page 1', 10, 5, 5, 1],
      ];

      test.each(cases)('%s', (_title, totalItems, pageSize, page, expected) => {
        expect(
          goToPreviousPageFn({ totalItems, pageSize, page }),
        ).toStrictEqual(expected);
      });
    });
  });
});

import { describe, test, expect } from 'vitest';
import { infoTextFn, selectPageTooltipTextFn } from './text';

describe('helpers', () => {
  describe('text', () => {
    describe('infoTextFn', () => {
      const cases: [string, number, number, number, string][] = [
        ['pageSize < totalItems', 30, 5, 1, '6 - 10 of 30 items'],
        ['pageSize > totalItems', 30, 45, 1, '30 items'],
        ['totalItems is null', null, 45, 1, 'null items'],
        ['totalItems is null', undefined, 45, 1, '46 - 90 of undefined items'],
        ['totalItems is null', 30, 45, null, '30 items'],
      ];

      test.each(cases)('%s', (_title, totalItems, pageSize, page, expected) => {
        expect(infoTextFn({ totalItems, pageSize, page })).toBe(expected);
      });
    });

    describe('selectPageTooltipTextFn', () => {
      const cases: [string, number, number, number, string][] = [
        ['pageSize < totalItems', 30, 5, 1, 'Page 2 of 6'],
        ['pageSize > totalItems', 30, 45, 1, 'Page 2 of 1'],
        ['totalItems is null', null, 45, 1, 'Page 2 of 1'],
        ['totalItems is undefined', undefined, 45, 1, 'Page 2 of 1'],
        ['pages is null', 30, 45, null, 'Page 1 of 1'],
      ];

      test.each(cases)('%s', (_title, totalItems, pageSize, page, expected) => {
        expect(selectPageTooltipTextFn({ totalItems, pageSize, page })).toBe(expected);
      });
    });
  });
});

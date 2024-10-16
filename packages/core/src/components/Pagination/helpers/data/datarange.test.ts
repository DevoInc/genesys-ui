import { describe, test, expect } from 'vitest';
import { dataRangePagination } from './dataRange';

describe('helpers', () => {
  describe('pages', () => {
    describe('getLastPage', () => {
      const cases: [string, any[], number, number, any[]][] = [
        [
          'page 0 return five first elements',
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          0,
          5,
          [1, 2, 3, 4, 5],
        ],
        [
          'page 0 return five last elements',
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          1,
          5,
          [6, 7, 8, 9, 10],
        ],
        [
          'page no exist return empty array',
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          10,
          5,
          [],
        ],
        [
          'page is null',
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          null,
          5,
          [1, 2, 3, 4, 5],
        ],
        [
          'page is undefined',
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          undefined,
          5,
          [],
        ],
        [
          'list is undefined',
          undefined,
          1,
          5,
          undefined,
        ],
        [
          'list is null',
          null,
          1,
          5,
          undefined,
        ],
      ];

      test.each(cases)('%s', (_title, list, page, pageSize, expected) => {
        expect(dataRangePagination(list, page, pageSize)).toStrictEqual(
          expected,
        );
      });
    });
  });
});

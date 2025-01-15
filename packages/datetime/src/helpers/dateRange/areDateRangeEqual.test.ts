import { describe, test, expect } from 'vitest';

import { areDateRangeEqual } from './areDateRangeEqual';
import type { TDateRange } from '../../declarations';

describe('helpers', () => {
  describe('dateRange', () => {
    describe('arePresetsEqual', () => {
      const cases: [string, TDateRange, TDateRange, boolean][] = [
        ['eq num', [1, 2], [1, 2], true],
        ['eq string', ['1', '2'], ['1', '2'], true],
        [
          'eq dates',
          [new Date(2000, 1, 1), new Date(2000, 1, 2)],
          [new Date(2000, 1, 1), new Date(2000, 1, 2)],
          true,
        ],
        ['not eq num', [1, 2], [2, 2], false],
        ['not eq string', ['1', '2'], ['2', '2'], false],
        [
          'not eq dates',
          [new Date(2000, 1, 1), new Date(2000, 1, 2)],
          [new Date(2001, 1, 1), new Date(2000, 1, 2)],
          false,
        ],
        ['not eq mix num & string', [1, 2], ['1', '2'], false],
        [
          'not eq mix num & date',
          [1, 2],
          [new Date(2001, 1, 1), new Date(2000, 1, 2)],
          false,
        ],
        [
          'eq mix num & date',
          [new Date(2001, 1, 1).getTime(), new Date(2000, 1, 2).getTime()],
          [new Date(2001, 1, 1), new Date(2000, 1, 2)],
          true,
        ],
        [
          'not eq mix string & date',
          ['1', '2'],
          [new Date(2001, 1, 1), new Date(2000, 1, 2)],
          false,
        ],
        ['not eq empty range with string', [], ['1', '2'], false],
        ['not eq string with empty range', ['1', '2'], [], false],
      ];

      test.each(cases)('%s', (_title, a, b, expected) => {
        expect(areDateRangeEqual(a, b)).toBe(expected);
      });
    });
  });
});

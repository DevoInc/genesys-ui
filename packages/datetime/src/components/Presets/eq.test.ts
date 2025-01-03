import { describe, test, expect } from 'vitest';

import { arePresetValuesEqual } from './eq';
import type { TDateRange } from '../../declarations';

describe('Presets', () => {
  describe('eq', () => {
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
          'not eq mix string & date',
          ['1', '2'],
          [new Date(2001, 1, 1), new Date(2000, 1, 2)],
          false,
        ],
        ['not eq empty range with string', [], ['1', '2'], false],
        ['not eq string with empty range', ['1', '2'], [], false],
      ];

      test.each(cases)('%s', (_title, a, b, expected) => {
        expect(arePresetValuesEqual(a, b)).toBe(expected);
      });
    });
  });
});

import { describe, test, expect } from 'vitest';
import { clamp } from './clamp';

describe('helpers', () => {
  describe('pages', () => {
    describe('getLastPage', () => {
      const cases: [string, number, number, number][] = [
        [
          'value is the range return value',
          10,
          5,
          5,
        ],
        [
          'value > max return max',
          10,
          50,
          10,
        ],
        [
          'value < min return min',
          10,
          -1,
          0,
        ],
      ];

      test.each(cases)('%s', (_title, max, value, expected) => {
        expect(clamp(max, value)).toStrictEqual(
          expected,
        );
      });
    });
  });
});

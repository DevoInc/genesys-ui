import { describe, test, expect } from 'vitest';

import { getSizesWithSeparators } from './getSizesWithSeparators';
import type { TSizes } from '../declarations';

describe('components', () => {
  describe('SplitLayout', () => {
    describe('size', () => {
      describe('getSizesWithSeparators', () => {
        const cases: [string, TSizes, number, number[]][] = [
          [
            '[20, 250] & 10 should be [15, 10, 245]',
            [20, 250],
            10,
            [15, 10, 245],
          ],
        ];
        test.each(cases)('%s', (_title, sizes, separatorSize, expected) => {
          expect(getSizesWithSeparators(sizes, separatorSize)).toStrictEqual(
            expected,
          );
        });
      });
    });
  });
});

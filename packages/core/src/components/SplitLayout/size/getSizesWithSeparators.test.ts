import { describe, test, expect } from 'vitest';

import { getSizesWithSeparators } from './getSizesWithSeparators';
import type { TSizes } from '../declarations';

describe('components', () => {
  describe('SplitLayout', () => {
    describe('size', () => {
      describe('getSizesWithSeparators', () => {
        const cases: [string, TSizes, number, number[]][] = [
          ['[20, 250] & 10', [20, 250], 10, [20, 10, 250]],
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

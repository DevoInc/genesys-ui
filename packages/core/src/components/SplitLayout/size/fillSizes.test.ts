import { describe, test, expect } from 'vitest';

import { fillSizes } from './fillSizes';
import type { TSizes } from '../declarations';

describe('components', () => {
  describe('SplitLayout', () => {
    describe('size', () => {
      describe('fillSizes', () => {
        const cases: [string, TSizes, number, TSizes][] = [
          ['< n', [20, 10], 3, [20, 10, 'auto']],
          ['> n', [20, 10], 1, [20]],
          ['= n', [20, 10], 2, [20, 10]],
        ];
        test.each(cases)('%s', (_title, sizes, n, expected) => {
          expect(fillSizes(sizes, n)).toStrictEqual(expected);
        });
      });
    });
  });
});

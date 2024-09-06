import { describe, test, expect } from 'vitest';

import { parseSizes } from './parseSizes';
import type { TSizes } from '../declarations';

describe('components', () => {
  describe('SplitLayout', () => {
    describe('size', () => {
      describe('parseSizes', () => {
        const cases: [string, TSizes, number, number[]][] = [
          [
            "['20%', '250px', 'auto']",
            ['20%', '250px', 'auto'],
            1000,
            [200, 250, 550],
          ],
          [
            "['20%', 250, 'auto']",
            ['20%', 250, 'auto'],
            1000,
            [200, 250, 550],
          ],
        ];
        test.each(cases)('%s', (_title, sizes, totalSize, expected) => {
          expect(parseSizes(sizes, totalSize)).toStrictEqual(expected);
        });
      });
    });
  });
});

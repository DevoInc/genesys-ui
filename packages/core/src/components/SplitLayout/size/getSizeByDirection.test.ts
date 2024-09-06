import { describe, test, expect } from 'vitest';

import { getSizeByDirection } from './getSizeByDirection';
import type { TDirection, TSize } from '../declarations';

describe('components', () => {
  describe('SplitLayout', () => {
    describe('size', () => {
      describe('getSizeByDirection', () => {
        const cases: [string, TDirection, TSize, number][] = [
          [
            'horizontal & { width: 100, height: 50 }',
            'horizontal',
            { width: 100, height: 50 },
            100,
          ],
          [
            'vertical & { width: 100, height: 50 }',
            'vertical',
            { width: 100, height: 50 },
            50,
          ],
        ];
        test.each(cases)('%s', (_title, direction, size, expected) => {
          expect(getSizeByDirection(direction, size)).toStrictEqual(expected);
        });
      });
    });
  });
});

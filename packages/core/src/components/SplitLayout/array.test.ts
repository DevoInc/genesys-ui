import { describe, test, expect } from 'vitest';

import { interpolateItems } from './array';

describe('components', () => {
  describe('SplitLayout', () => {
    describe('array', () => {
      describe('interpolateItems', () => {
        const cases: [
          string,
          unknown[],
          () => unknown,
          () => unknown,
          unknown[],
        ][] = [
          [
            'interpolate number',
            [1, 2, 3, 4],
            () => 0,
            undefined,
            [1, 0, 2, 0, 3, 0, 4],
          ],
        ];

        test.each(cases)(
          '%s',
          (_title, arr, interpolatFunc, wrapperFunc, expected) => {
            expect(
              interpolateItems(arr, interpolatFunc, wrapperFunc),
            ).toStrictEqual(expected);
          },
        );
      });
    });
  });
});

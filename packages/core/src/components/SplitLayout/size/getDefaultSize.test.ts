import { describe, test, expect } from 'vitest';

import { getDefaultSize } from './getDefaultSize';

describe('components', () => {
  describe('SplitLayout', () => {
    describe('size', () => {
      describe('getDefaultSize', () => {
        const cases: [string, number, number[]][] = [
          ['4 children', 4, [25, 25, 25, 25]],
        ];
        test.each(cases)('%s', (_title, childrenNumber, expected) => {
          expect(getDefaultSize(childrenNumber)).toStrictEqual(expected);
        });
      });
    });
  });
});

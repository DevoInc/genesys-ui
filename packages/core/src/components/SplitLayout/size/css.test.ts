import { describe, test, expect } from 'vitest';

import { getCSSGridTemplate } from './css';
import type { TSizes } from '../declarations';

describe('components', () => {
  describe('SplitLayout', () => {
    describe('size', () => {
      describe('css', () => {
        describe('getCSSGridTemplate', () => {
          const cases: [string, TSizes, string][] = [
            ['[50, 50]', [50, 50], '50px 50px'],
            ["['50%', 50]", ['50%', 50], '50% 50px'],
          ];
          test.each(cases)('%s', (_title, sizes, expected) => {
            expect(getCSSGridTemplate(sizes)).toStrictEqual(expected);
          });
        });
      });
    });
  });
});

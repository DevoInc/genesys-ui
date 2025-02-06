import { describe, test, expect } from 'vitest';

import { optionsFilter } from './optionsFilter';
import { TOptionsFilterValue } from '../../filters';

describe('helpers', () => {
  describe('filters', () => {
    describe('optionsFilter', () => {
      const cases: [string, string | string[], TOptionsFilterValue, boolean][] =
        [
          ['string', 'abc', { value: [{ label: 'abc', value: 'abc' }] }, true],
          [
            'truth array of string',
            ['abc', 'def'],
            { value: [{ label: 'abc', value: 'abc' }] },
            false,
          ],
          [
            'falsy array of string',
            ['abc', 'def'],
            { value: [{ label: 'xyz', value: 'xyz' }] },
            false,
          ],
        ];

      test.each(cases)('%s', (_title, data, options, expected) => {
        expect(optionsFilter(data, options)).toBe(expected);
      });
    });
  });
});

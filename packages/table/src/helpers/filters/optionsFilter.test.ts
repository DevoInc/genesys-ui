import { describe, test, expect } from 'vitest';

import { optionsFilter } from './optionsFilter';
import { TOptionsFilterValue } from '../../filters';

describe('helpers', () => {
  describe('filters', () => {
    describe('optionsFilter', () => {
      const cases: [string, string | string[], TOptionsFilterValue, boolean][] =
        [
          [
            'truth string',
            'abc',
            { value: [{ label: 'abc', value: 'abc' }] },
            true,
          ],
          [
            'falsy string',
            'abc',
            { value: [{ label: 'ab', value: 'ab' }] },
            false,
          ],
          [
            'the array contains at least one element of the filter',
            ['abc', 'def'],
            { value: [{ label: 'abc', value: 'abc' }] },
            true,
          ],
          [
            'the array contains all of the elements of the filter',
            ['abc', 'def'],
            {
              value: [
                { label: 'abc', value: 'abc' },
                { label: 'def', value: 'def' },
              ],
            },
            true,
          ],
          [
            'the array does not contain all of the elements of the filter',
            ['abc', 'def'],
            {
              value: [
                { label: 'abc', value: 'abc' },
                { label: 'ghi', value: 'ghi' },
              ],
            },
            false,
          ],
          [
            'the filter contains all of the elements of the array and something more',
            ['abc', 'def'],
            {
              value: [
                { label: 'abc', value: 'abc' },
                { label: 'def', value: 'def' },
                { label: 'ghi', value: 'ghi' },
              ],
            },
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

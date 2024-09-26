import { describe, test, expect } from 'vitest';

import type { TData } from '../../../declarations';
import { addAfterRowToData } from './addAfterRowToData';

describe('helpers', () => {
  describe('afterRow', () => {
    describe('toData', () => {
      describe('addAfterRowToData', () => {
        const cases: [string, TData, string, TData][] = [
          ['should handle an empty data array', [], '1', []],
          [
            'should not modify the data if the id is not found',
            [{ id: '1' }, { id: '2' }],
            '3',
            [{ id: '1' }, { id: '2' }],
          ],
          [
            'should add a row after the row with the matching id',
            [{ id: '1' }, { id: '2' }],
            '2',
            [
              { id: '1' },
              { id: '2' },
              {
                id: 'afterRow-2',
              },
            ],
          ],
        ];

        test.each(cases)('%s', (_title, data, id, expected) => {
          expect(addAfterRowToData(data, id)).toEqual(expected);
        });
      });
    });
  });
});

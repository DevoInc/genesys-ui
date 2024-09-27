import { describe, test, expect } from 'vitest';

import type { TData } from '../../../declarations';
import { deleteAfterRowToDataById } from './deleteAfterRowToDataById';

describe('helpers', () => {
  describe('afterRow', () => {
    describe('toData', () => {
      describe('deleteAfterRowToDataById', () => {
        const cases: [string, TData, string, TData][] = [
          [
            'should delete the row with the matching id',
            [{ id: '1' }, { id: '2' }],
            '1',
            [{ id: '2' }],
          ],
          [
            'should not modify the data if the id is not found',
            [{ id: '1' }, { id: '2' }],
            '3',
            [{ id: '1' }, { id: '2' }],
          ],
          ['should handle an empty data array', [], '3', []],
          ['should handle an undefined data', null, '3', undefined],
          ['should handle an empty data array with id null', [], null, []],
        ];

        test.each(cases)('%s', (_title, data, id, expected) => {
          expect(deleteAfterRowToDataById(data, id)).toEqual(expected);
        });
      });
    });
  });
});

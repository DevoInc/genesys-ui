import { describe, test, expect } from 'vitest';

import type { TData, TRow } from '../../../declarations';
import { findDataById } from './findDataById';

describe('helpers', () => {
  describe('afterRow', () => {
    describe('toData', () => {
      describe('deleteAfterRowToDataById', () => {
        const cases: [string, TData, string, TRow][] = [
          [
            'should return the row with the matching id',
            [{ id: '1' }, { id: '2' }],
            '2',
            { id: '2' },
          ],
          [
            'should undefined if the id is not found',
            [{ id: '1' }, { id: '2' }],
            '3',
            undefined,
          ],
          ['should handle an undefined element', [], '3', undefined],
          ['should handle an undefined element with data null', null, '3', undefined],
          ['should handle an undefined with id null', [], null, undefined],
        ];

        test.each(cases)('%s', (_title, data, id, expected) => {
          expect(findDataById(data, id)).toEqual(expected);
        });
      });
    });
  });
});
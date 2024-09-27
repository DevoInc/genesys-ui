import { describe, test, expect } from 'vitest';

import type { TRowDef } from '../../../declarations';
import { deleteAfterRowToRowDefs } from './deleteAfterRowToRowDefs';

describe('helpers', () => {
  describe('afterRow', () => {
    describe('toRowDefs', () => {
      describe('deleteAfterRowToRowDefs', () => {
        const cases: [string, TRowDef[], string, TRowDef[]][] = [
          [
            'should delete the row with the matching id',
            [{ id: 'afterRow-1' }, { id: '2' }],
            '1',
            [{ id: '2' }],
          ],
          [
            'should not modify the data if the id is not found',
            [{ id: 'afterRow-1' }, { id: '2' }],
            '3',
            [{ id: 'afterRow-1' }, { id: '2' }],
          ],
          ['should handle an empty data array', [], '3', []],
          ['should handle an undefined data', null, '3', undefined],
          ['should handle an empty data array with id null', [], null, []],
        ];

        test.each(cases)('%s', (_title, data, id, expected) => {
          expect(deleteAfterRowToRowDefs(data, id)).toEqual(expected);
        });
      });
    });
  });
});
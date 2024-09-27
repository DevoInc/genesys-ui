import { describe, test, expect } from 'vitest';

import type { TRowDef } from '../../../declarations';
import { deletePresetRowDefs } from './deletePresetRowDef';

describe('helpers', () => {
  describe('definitions', () => {
    describe('row', () => {
      describe('deletePresetRowDefs', () => {
        const cases: [string, TRowDef[], string, TRowDef[]][] = [
          [
            'should return same rowDef because not exist preset in id',
            [{ id: '1' }, { id: '2' }],
            '2',
            [{ id: '1' }, { id: '2' }],
          ],
          [
            'should return same rowDef because no exist id',
            [{ id: '1' }, { id: '2' }],
            '3',
            [{ id: '1' }, { id: '2' }],
          ],
          [
            'should delete preset in id',
            [{ id: '1' }, { id: '2', preset: 'created' }],
            '2',
            [{ id: '1' }, { id: '2', preset: null }],
          ],
        ];

        test.each(cases)('%s', (_title, rowDefs, id, expected) => {
          expect(deletePresetRowDefs(rowDefs, id)).toEqual(expected);
        });
      });
    });
  });
});

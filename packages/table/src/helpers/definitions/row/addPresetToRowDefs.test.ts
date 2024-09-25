import { describe, test, expect } from 'vitest';

import type { TPresetRow, TRowDef } from '../../../declarations';
import { addPresetToRowDefs } from './addPresetRowDefs';

describe('helpers', () => {
  describe('definitions', () => {
    describe('row', () => {
      describe('addPresetToRowDefs', () => {
        const cases: [string, TRowDef[], string, TPresetRow, TRowDef[]][] = [
          [
            'should add the preset to an existing row',
            [{ id: '1' }, { id: '2' }],
            '2',
            'created',
            [{ id: '1' }, { id: '2', preset: 'created' }],
          ],
          [
            'should create a new row with the preset if the id does not exist',
            [{ id: '1' }, { id: '2' }],
            '3',
            'created',
            [{ id: '1' }, { id: '2' }, { id: '3', preset: 'created' }],
          ],
          [
            'should return undefined if the rowdef no exist',
            null,
            '3',
            'created',
            undefined,
          ],
          [
            'should create rowDef if the no exist',
            [{ id: '1' }, { id: '2' }],
            null,
            'created',
            [{ id: '1' }, { id: '2' }, { id: null, preset: 'created' }],
          ],
        ];

        test.each(cases)('%s', (_title, rowDefs, id, preset, expected) => {
          expect(addPresetToRowDefs(rowDefs, id, preset)).toEqual(expected);
        });
      });
    });
  });
});

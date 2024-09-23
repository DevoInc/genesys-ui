import { describe, test, expect } from 'vitest';

import { TCellDef } from '../../../declarations';
import { getCellDef } from './getCellDef';

describe('helpers', () => {
  describe('definitions', () => {
    describe('cell', () => {
      describe('getCellDef', () => {
        const cases: [string, TCellDef[], string, string, TCellDef][] = [
          ['empty row defs return undefined', [], '1', '2', undefined],
          [
            'colId & rowId null return undefined',
            [{ colId: '1', rowId: '2' }],
            null,
            null,
            undefined,
          ],
          [
            'colId null return undefined',
            [{ colId: '1', rowId: '2' }],
            null,
            '2',
            undefined,
          ],
          [
            'rowId null return undefined',
            [{ colId: '1', rowId: '2' }],
            '1',
            null,
            undefined,
          ],
          ['rowDef null return undefined', null, '1', '2', undefined],
          [
            'return element cellDef',
            [{ colId: '1', rowId: '2' }],
            '1',
            '2',
            { colId: '1', rowId: '2' },
          ],
          [
            'id not find in rowDef',
            [{ colId: '1', rowId: '2' }],
            '1',
            '3',
            undefined,
          ],
        ];

        test.each(cases)('%s', (_title, rowDefs, colId, rowId, expected) => {
          expect(getCellDef(rowDefs, colId, rowId)).toEqual(expected);
        });
      });
    });
  });
});

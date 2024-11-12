import { describe, test, expect } from 'vitest';

import { TCellDef } from '../../declarations';
import { addNewCellDef } from './addNewCellDef';

describe('helpers', () => {
  describe('cellDef', () => {
    describe('addNewCellDef', () => {
      const cases: [string, TCellDef[], TCellDef, TCellDef[]][] = [
        [
          'Add new cellDef with cellDefs empty',
          [],
          { colId: 'name', rowId: '0' },
          [{ colId: 'name', rowId: '0' }],
        ],
        [
          'New cell def exist in cellDefs',
          [{ colId: 'name', rowId: '0' }],
          { colId: 'name', rowId: '0' },
          [{ colId: 'name', rowId: '0' }],
        ],
        [
          'New celldef with diferent rowid',
          [{ colId: 'name', rowId: '1' }],
          { colId: 'name', rowId: '0' },
          [{ colId: 'name', rowId: '1' }, { colId: 'name', rowId: '0' }],
        ],
      ];

      test.each(cases)('%s', (_title, cellDefs, cellDef, expected) => {
        expect(addNewCellDef(cellDefs, cellDef)).toEqual(expected);
      });
    });
  });
});

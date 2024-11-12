import { describe, test, expect } from 'vitest';

import { TCellDef } from '../../declarations';
import { existCellDef } from './existCellDef';

describe('helpers', () => {
  describe('cellDef', () => {
    describe('addNewCellDef', () => {
      const cases: [string, TCellDef[], TCellDef, boolean][] = [
        [
          'Add new cellDef with cellDefs empty',
          [],
          { colId: 'name', rowId: '0' },
          false
        ],
        [
          'New cell def exist in cellDefs',
          [{ colId: 'name', rowId: '0' }],
          { colId: 'name', rowId: '0' },
          true
        ],
        [
          'New celldef with diferent rowid',
          [{ colId: 'name', rowId: '1' }],
          { colId: 'name', rowId: '0' },
          false,
        ],
      ];

      test.each(cases)('%s', (_title, cellDefs, cellDef, expected) => {
        expect(existCellDef(cellDefs, cellDef)).toEqual(expected);
      });
    });
  });
});
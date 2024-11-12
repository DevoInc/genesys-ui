import { describe, test, expect } from 'vitest';

import { TCellDef } from '../../declarations';
import { updatedCellDef } from './updatedCellDef';

describe('helpers', () => {
  describe('cellDef', () => {
    describe('addNewCellDef', () => {
      const cases: [string, TCellDef[], TCellDef, TCellDef[]][] = [
        [
          'Add isEditMode prop',
          [{ colId: 'name', rowId: '0' }],
          { colId: 'name', rowId: '0', isEditMode: true },
          [{ colId: 'name', rowId: '0', isEditMode: true }],
        ],
        [
          'updated isEditMode prop',
          [{ colId: 'name', rowId: '0', isEditMode: false }],
          { colId: 'name', rowId: '0', isEditMode: true },
          [{ colId: 'name', rowId: '0', isEditMode: true }],
        ],
        [
          'cellDef no exist',
          [],
          { colId: 'name', rowId: '0', isEditMode: true },
          [{ colId: 'name', rowId: '0', isEditMode: true }],
        ],
      ];

      test.each(cases)('%s', (_title, cellDefs, cellDef, expected) => {
        expect(updatedCellDef(cellDefs, cellDef)).toEqual(expected);
      });
    });
  });
});

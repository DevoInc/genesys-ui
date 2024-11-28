import { describe, test, expect } from 'vitest';

import { TCellDef } from '../../declarations';
import { selectedCellDef } from './selectedCellDef';

describe('helpers', () => {
  describe('cellDef', () => {
    describe('selectedCellDef', () => {
      const cases: [string, TCellDef[], TCellDef, TCellDef[]][] = [
        [
          'Add isSelected prop',
          [{ colId: 'name', rowId: '0' }],
          { colId: 'name', rowId: '0' },
          [{ colId: 'name', rowId: '0', isSelected: true, isEditMode: false }],
        ],
        [
          'Add isSelected prop and delete other cells',
          [
            { colId: 'name', rowId: '0' },
            { colId: 'name', rowId: '1', isSelected: true },
          ],
          { colId: 'name', rowId: '0' },
          [
            { colId: 'name', rowId: '0', isSelected: true, isEditMode: false },
            { colId: 'name', rowId: '1', isSelected: false, isEditMode: false },
          ],
        ],
      ];

      test.each(cases)('%s', (_title, cellDefs, cellDef, expected) => {
        expect(selectedCellDef(cellDefs, cellDef)).toEqual(expected);
      });
    });
  });
});

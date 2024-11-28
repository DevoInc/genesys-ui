import { describe, test, expect } from 'vitest';

import { TCellDef } from '../../declarations';
import { isEditModeCellDef } from './isEditModeCellDef';

describe('helpers', () => {
  describe('cellDef', () => {
    describe('selectedCellDef', () => {
      const cases: [string, TCellDef[], TCellDef, TCellDef[]][] = [
        [
          'Add isSelected prop',
          [{ colId: 'name', rowId: '0' }],
          { colId: 'name', rowId: '0' },
          [{ colId: 'name', rowId: '0', isEditMode: true }],
        ],
        [
          'Add isSelected prop and delete other cells',
          [
            { colId: 'name', rowId: '0' },
            { colId: 'name', rowId: '1', isEditMode: true },
          ],
          { colId: 'name', rowId: '0' },
          [
            { colId: 'name', rowId: '0', isEditMode: true },
            { colId: 'name', rowId: '1', isEditMode: false },
          ],
        ],
      ];

      test.each(cases)('%s', (_title, cellDefs, cellDef, expected) => {
        expect(isEditModeCellDef(cellDefs, cellDef)).toEqual(expected);
      });
    });
  });
});

import { describe, test, expect } from 'vitest';

import { TColDef } from '../../../declarations';
import { getRowHeightFromColDefs } from './getRowHeightFromColDefs';

describe('helpers', () => {
  describe('definitions', () => {
    describe('col', () => {
      describe('getRowHeightFromColDefs', () => {
        const cases: [string, TColDef[], number][] = [
          ['empty col defs return 0', [], undefined],
          ['col defs without rowHeight', [{ id: '1' }, { id: '2' }], undefined],
          ['one col with rowHeight', [{ id: '1', rowHeight: 100 }], 100],
          [
            'several columns with the same rowHeight',
            [
              { id: '1', rowHeight: 100 },
              { id: '2', rowHeight: 100 },
              { id: '3', rowHeight: 100 },
            ],
            100,
          ],
          [
            'several columns with diferents rowHeight',
            [
              { id: '1', rowHeight: 10 },
              { id: '2', rowHeight: 100 },
              { id: '3', rowHeight: 50 },
            ],
            100,
          ],
        ];

        test.each(cases)('%s', (_title, rowDefs, expected) => {
          expect(getRowHeightFromColDefs(rowDefs)).toEqual(expected);
        });
      });
    });
  });
});

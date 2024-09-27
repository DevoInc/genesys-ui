import { describe, test, expect } from 'vitest';

import { TColDef } from '../../../declarations';
import { getColDef } from './getColDef';

describe('helpers', () => {
  describe('definitions', () => {
    describe('col', () => {
      describe('getColDef', () => {
        const cases: [string, TColDef[], string, TColDef][] = [
          ['empty col defs return undefined', [], '1', undefined],
          ['id null return undefined', [{ id: '1' }], null, undefined],
          ['colDef null return undefined', null, '1', undefined],
          ['return element colDef', [{ id: '1' }], '1', { id: '1' }],
          ['id not find in colDef', [{ id: '1' }], '2', undefined],
        ];

        test.each(cases)('%s', (_title, rowDefs, id, expected) => {
          expect(getColDef(rowDefs, id)).toEqual(expected);
        });
      });
    });
  });
});

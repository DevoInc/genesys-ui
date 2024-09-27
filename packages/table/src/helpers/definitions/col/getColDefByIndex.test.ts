import { describe, test, expect } from 'vitest';

import { TColDef } from '../../../declarations';
import { getColDefByIndex } from './getColDefByIndex';

describe('helpers', () => {
  describe('definitions', () => {
    describe('col', () => {
      describe('getColDefByIndex', () => {
        const cases: [string, TColDef[], number, TColDef][] = [
          ['empty col defs return undefined', [], 1, undefined],
          ['id null return undefined', [{ id: '1' }], null, undefined],
          ['colDef null return undefined', null, 1, undefined],
          ['return element colDef', [{ id: '1' }], 0, { id: '1' }],
          ['id not find in colDef', [{ id: '1' }], 2, undefined],
        ];

        test.each(cases)('%s', (_title, rowDefs, id, expected) => {
          expect(getColDefByIndex(rowDefs, id)).toEqual(expected);
        });
      });
    });
  });
});

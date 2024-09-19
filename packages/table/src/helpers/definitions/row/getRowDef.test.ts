import { describe, test, expect } from 'vitest';

import { TRowDef } from '../../../declarations';
import { getRowDef } from './getRowDef';

describe('helpers', () => {
  describe('definitions', () => {
    describe('row', () => {
      describe('getRowDef', () => {
        const cases: [string, TRowDef[], string, TRowDef][] = [
          ['empty row defs return undefined', [], '1', undefined],
          ['id null return undefined', [{ id: '1' }], null, undefined],
          ['rowDef null return undefined', null, '1', undefined],
          ['return element rowDef', [{ id: '1' }], '1', { id: '1' }],
          ['id not find in rowDef', [{ id: '1' }], '2', undefined],
        ];

        test.each(cases)('%s', (_title, rowDefs, id, expected) => {
          expect(getRowDef(rowDefs, id)).toEqual(expected);
        });
      });
    });
  });
});

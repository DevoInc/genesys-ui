import { describe, test, expect } from 'vitest';

import { TRowDef } from '../../../declarations';
import { toggleHideRowDef } from './toggleHideRowDef';

describe('helpers', () => {
  describe('definitions', () => {
    describe('row', () => {
      describe('toggleHideRowDef', () => {
        const cases: [string, TRowDef[], string, TRowDef[]][] = [
          ['empty rowdefs return empty rowdefs', [], '1', []],
          ['rowdefs null return undefined', null, '1', undefined],
          [
            'changed visible to no visible',
            [{ id: '1', hide: false }],
            '1',
            [{ id: '1', hide: true }],
          ],
          [
            'changed no visible to visible',
            [{ id: '1', hide: true }],
            '1',
            [{ id: '1', hide: false }],
          ],
        ];

        test.each(cases)('%s', (_title, rowDefs, id, expected) => {
          expect(toggleHideRowDef(rowDefs, id)).toEqual(expected);
        });
      });
    });
  });
});

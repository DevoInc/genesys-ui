import { describe, test, expect } from 'vitest';

import type { TRowDef } from '../../../declarations';
import { addAfterRowsToRowDefs } from './addAfterRowsToRowDefs';

describe('helpers', () => {
  describe('afterRow', () => {
    describe('toRowDefs', () => {
      describe('addAfterRowsToRowDefs', () => {
        const cases: [string, TRowDef[], string[], TRowDef[]][] = [
          [
            'add element with rowdefs empty',
            [],
            ['afterRow-1', 'afterRow-2'],
            [
              { id: 'afterRow-1', hide: true },
              { id: 'afterRow-2', hide: true },
            ],
          ],
          [
            'add two afterRows, one that already exists on rowDefs',
            [{ id: 'afterRow-1', hide: false }],
            ['afterRow-1', 'afterRow-2'],
            [
              { id: 'afterRow-1', hide: false },
              { id: 'afterRow-2', hide: true },
            ],
          ],
          [
            'add one afterRows, on a non empty rowDefs',
            [{ id: '1', hide: false }],
            ['afterRow-1'],
            [
              { id: '1', hide: false },
              { id: 'afterRow-1', hide: true },
            ],
          ],
        ];

        test.each(cases)('%s', (_title, rowDefs, afterRowIds, expected) => {
          expect(
            addAfterRowsToRowDefs(rowDefs, afterRowIds, () => null, 13),
          ).toMatchObject(expected);
        });
      });
    });
  });
});

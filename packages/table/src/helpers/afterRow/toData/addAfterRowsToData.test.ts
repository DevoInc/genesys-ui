import { describe, test, expect } from 'vitest';

import type { TData } from '../../../declarations';
import { addAfterRowsToData } from './addAfterRowsToData';

describe('helpers', () => {
  describe('afterRow', () => {
    describe('toData', () => {
      describe('addAfterRowsToData', () => {
        const cases: [string, TData, TData, string[]][] = [
          ['should handle an empty data array', [], [], []],
          ['should handle an undefined data', null, undefined, []],
          [
            'should add a row after each existing row',
            [{ id: '1' }, { id: '2' }],
            [
              { id: '1' },
              { id: 'afterRow-1' },
              { id: '2' },
              { id: 'afterRow-2' },
            ],
            ['afterRow-1', 'afterRow-2'],
          ],
        ];

        test.each(cases)(
          '%s',
          (_title, data, expectedNewData, expectedAfterRowIds) => {
            const [newData, afterRowIds] = addAfterRowsToData(data);
            expect(newData).toEqual(expectedNewData);
            expect(afterRowIds).toEqual(expectedAfterRowIds);
          },
        );
      });
    });
  });
});

import { describe, test, expect } from 'vitest';

import { TRowDef } from '../../declarations';
import { addAfterRowToRowDefs } from './addAfterRowToRowDefs';

describe('Add afterrow to row defs', () => {
  describe('addAfterRowToRowDefs', () => {
    const cases: [string, TRowDef[], string, TRowDef[]][] = [
      [
        'add element with rowdefs empty',
        [],
        '1',
        [{ id: `afterRow-1`, hide: false }],
      ],
      [
        'add element with rowdefs > 0',
        [{ id: `afterRow-1`, hide: false }],
        '2',
        [
          { id: `afterRow-1`, hide: false },
          { id: `afterRow-2`, hide: false },
        ],
      ],
      ['add element with rowdefs empty', null, '1', undefined],
    ];

    test.each(cases)('%s', (_title, rowDefs, id, expected) => {
      expect(addAfterRowToRowDefs(rowDefs, id, () => null, 13)).toMatchObject(
        expected,
      );
    });
  });
});

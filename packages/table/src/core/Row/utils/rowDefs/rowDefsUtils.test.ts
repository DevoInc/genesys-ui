import { describe, test, expect } from 'vitest';

import { getRowDef } from './rowDefsUtils';
import { TRowDef } from '../../../../declarations';

const rowDefs = [
  {
    id: '1',
    hide: true,
  },
];

describe('RowDefs utils', () => {
  describe('get RowDef', () => {
    const cases: [string, TRowDef[], string, TRowDef][] = [
      [
        'Search rowDef with id',
        rowDefs,
        '1',
        {
          id: '1',
          hide: true,
        },
      ],
      [
        'Search rowDef with id',
        rowDefs,
        '2',
        undefined,
      ],
    ];

    test.each(cases)('%s', (_title, rowDefs, id, expected) => {
      expect(getRowDef(rowDefs, id)).toEqual(expected);
    });
  });
});

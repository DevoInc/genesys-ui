import { describe, test, expect } from 'vitest';

import type { TOrderColumn } from './declarations';
import { updateOrderStruct } from './updateOrderStruct';

describe('updateOrderStruct', () => {
  const cases: [string, TOrderColumn[], string, TOrderColumn[]][] = [
    ['update existing desc column', [{ id: 'c1', sort: 'desc' }], 'c1', []],
    [
      'update existing asc column',
      [{ id: 'c1', sort: 'asc' }],
      'c1',
      [{ id: 'c1', sort: 'desc' }],
    ],
    ['update a new column', [], 'c1', [{ id: 'c1', sort: 'asc' }]],
    [
      'update second column asc',
      [
        { id: 'c1', sort: 'desc' },
        { id: 'c2', sort: 'asc' },
      ],
      'c2',
      [
        { id: 'c1', sort: 'desc' },
        { id: 'c2', sort: 'desc' },
      ],
    ],
  ];

  test.each(cases)('%s', (_title, orderStruct, id, expected) => {
    expect(updateOrderStruct(orderStruct, id)).toStrictEqual(expected);
  });
});

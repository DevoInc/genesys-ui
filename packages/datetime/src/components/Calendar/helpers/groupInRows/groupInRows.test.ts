import { describe, test, expect } from 'vitest';

import { groupInRows } from './groupInRows';

const row: Date[] = Array.from({ length: 7 }).map(() => undefined);
describe('groupInRows', () => {
  const cases: [string, Date[], Date[][]][] = [
    [
      'Feb 2025',
      Array.from({ length: 5 * 7 }),
      Array.from({ length: 5 }).map(() => row),
    ],
    [
      'Mar 2025',
      Array.from({ length: 6 * 7 }),
      Array.from({ length: 6 }).map(() => row),
    ],
  ];

  test.each(cases)('%s', (_title, args, expected) => {
    expect(groupInRows(args)).toEqual(expected);
  });
});

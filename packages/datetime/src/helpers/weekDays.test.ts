import { describe, test, expect } from 'vitest';

import { rotateWeekDays } from './weekDays';

describe('rotateWeekDays', () => {
  const cases: [string, string[], number, string[]][] = [
    [
      'array of four elements rotated to 2 position',
      ['1', '2', '3', '4'],
      2,
      ['3', '4', '1', '2'],
    ],
    [
      'array of four elements rotated to 0 position',
      ['1', '2', '3', '4'],
      0,
      ['1', '2', '3', '4'],
    ],
    ['empty array rotated 3 position', [], 3, []],
    [
      'array of four elements rotated to -1 position',
      ['1', '2', '3', '4'],
      -1,
      ['4', '1', '2', '3'],
    ],
  ];

  test.each(cases)('%s', (_title, arr, n, expected) => {
    expect(rotateWeekDays(arr, n)).toEqual(expected);
  });
});

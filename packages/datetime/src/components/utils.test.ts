import { describe, test, expect } from 'vitest';

import { TDatetime } from './declarations';
import { toTSorPreset, isManageableDate, parseToTimestamp } from './utils';

describe('toTSorPreset', () => {
  const cases: [string, string | TDatetime, number | string][] = [
    ['Date type', new Date(2022, 11, 1), new Date(2022, 11, 1).getTime()],
    [
      'string type',
      'Nov 10th, 2022 has 30 prev days',
      'Nov 10th, 2022 has 30 prev days',
    ],
    ['numeric', 987654, 987654],
    ['numeric as string', '987654', 987654],
    ['null', null, null],
    ['undefined', undefined, undefined],
  ];

  test.each(cases)('%s', (_title, ts, expected) => {
    expect(toTSorPreset(ts)).toBe(expected);
  });
});

describe('isManageableDate', () => {
  const cases: [string, string | number, boolean][] = [
    ['string', 'Nov 10th, 2022 has 30 prev days', false],
    ['numeric', 987654, true],
    ['numeric as string', '987654', true],
    ['null', null, false],
  ];

  test.each(cases)('%s', (_title, ts, expected) => {
    expect(isManageableDate(ts)).toBe(expected);
  });
});

describe('isValidDate', () => {
  const cases: [string, TDatetime | string, number | null][] = [
    ['base string case', '2023-12-01 00:00:00', 1701385200000],
    ['string without hours', '2023-12-01', 1701385200000],
    ['wrong string', 'str-12-01', null],
    ['base numeric', 1702425600000, 1702425600000],
    ['wrong numeric', 0, null],
    ['numeric as string', '987654', null],
    ['null', null, null],
  ];

  test.each(cases)('%s', (_title, date, expected) => {
    expect(parseToTimestamp(date)).toBe(expected);
  });
});

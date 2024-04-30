import { describe, test, expect } from 'vitest';

import { TDatetime } from '../components/declarations';
import { toTSorPreset, isManageableDate } from './time';

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

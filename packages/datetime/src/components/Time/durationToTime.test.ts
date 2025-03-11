import { describe, test, expect } from 'vitest';

import { durationToTime } from './durationToTime';

describe('durationToTime', () => {
  const cases: [
    string,
    number,
    { hours: number; minutes: number; seconds: number; milliseconds: number },
  ][] = [
    [
      '12 hours, 15 minutes, 30 seconds, 200 millisedonds',
      12 * 60 * 60 * 1000 + 15 * 60 * 1000 + 30 * 1000 + 200,
      { hours: 12, minutes: 15, seconds: 30, milliseconds: 200 },
    ],
    [
      '50 hours',
      50 * 60 * 60 * 1000,
      { hours: 50, minutes: 0, seconds: 0, milliseconds: 0 },
    ],
    [
      '120 minutes',
      120 * 60 * 1000,
      { hours: 2, minutes: 0, seconds: 0, milliseconds: 0 },
    ],
    ['null', null, { hours: 0, minutes: 0, seconds: 0, milliseconds: 0 }],
  ];

  test.each(cases)('%s', (_title, duration, expected) => {
    expect(durationToTime(duration)).toEqual(expected);
  });
});

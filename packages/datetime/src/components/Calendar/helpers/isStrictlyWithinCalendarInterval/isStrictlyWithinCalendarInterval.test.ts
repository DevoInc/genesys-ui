import { TZDate } from '@date-fns/tz';
import { describe, test, expect } from 'vitest';

import { isStrictlyWithinCalendarInterval } from './isStrictlyWithinCalendarInterval';

const tz = 'UTC';

describe('isStrictlyWithinCalendarInterval', () => {
  const cases: [string, Date, Date, Date, boolean][] = [
    [
      'left out',
      new TZDate(2025, 6, 10, tz),
      new TZDate(2025, 6, 12, tz),
      new TZDate(2025, 6, 15, tz),
      false,
    ],
    [
      'right out',
      new TZDate(2025, 6, 16, tz),
      new TZDate(2025, 6, 12, tz),
      new TZDate(2025, 6, 15, tz),
      false,
    ],
    [
      'match left limit',
      new TZDate(2025, 6, 12, 0, 0, 0, 'UTC'),
      new TZDate(2025, 6, 12, 17, 0, 0, 'UTC'),
      new TZDate(2025, 6, 15, 'UTC'),
      false,
    ],
    [
      'match right limit',
      new TZDate(2025, 6, 15, 23, 59, 59, tz),
      new TZDate(2025, 6, 12, tz),
      new TZDate(2025, 6, 15, 17, 0, 0, tz),
      false,
    ],
    [
      'inside the range',
      new TZDate(2025, 6, 13, tz),
      new TZDate(2025, 6, 12, tz),
      new TZDate(2025, 6, 15, tz),
      true,
    ],
    ['no range', new TZDate(2025, 6, 13, tz), undefined, undefined, false],
  ];

  test.each(cases)('%s', (_title, value, start, end, expected) => {
    expect(isStrictlyWithinCalendarInterval(value, { start, end })).toEqual(
      expected,
    );
  });
});

import { TZDate } from '@date-fns/tz';
import { describe, test, expect } from 'vitest';

import { isWithinCalendarInterval } from './isWithinCalendarInterval';

const tz = 'UTC';

describe('isWithinCalendarInterval', () => {
  const cases: [string, Date, Date, Date, string, boolean][] = [
    [
      'left out',
      new TZDate(2025, 6, 10, tz),
      new TZDate(2025, 6, 12, tz),
      new TZDate(2025, 6, 15, tz),
      tz,
      false,
    ],
    [
      'right out',
      new TZDate(2025, 6, 16, tz),
      new TZDate(2025, 6, 12, tz),
      new TZDate(2025, 6, 15, tz),
      tz,
      false,
    ],
    [
      'match left limit',
      new TZDate(2025, 6, 12, 0, 0, 0, 'UTC'),
      new TZDate(2025, 6, 12, 17, 0, 0, 'UTC'),
      new TZDate(2025, 6, 15, 'UTC'),
      tz,
      true,
    ],
    [
      'match right limit',
      new TZDate(2025, 6, 15, 23, 59, 59, tz),
      new TZDate(2025, 6, 12, tz),
      new TZDate(2025, 6, 15, 17, 0, 0, tz),
      tz,
      true,
    ],
    [
      'inside the range',
      new TZDate(2025, 6, 13, tz),
      new TZDate(2025, 6, 12, tz),
      new TZDate(2025, 6, 15, tz),
      tz,
      true,
    ],
    ['no range', new TZDate(2025, 6, 13, tz), undefined, undefined, tz, true],
  ];

  test.each(cases)('%s', (_title, value, start, end, tz, expected) => {
    expect(isWithinCalendarInterval(value, { start, end }, tz)).toEqual(
      expected,
    );
  });
});

import { describe, test, expect } from 'vitest';

import { isCalendarRange } from './isCalendarRange';
import type { TDateRange } from '../../../../declarations';

describe('isDateForCalendar', () => {
  const cases: [string, TDateRange, boolean][] = [
    ['empty', [], false],
    ["is calendar's date", [12, 12], true],
    ["isn't calendar' date", ['bye', new Date()], false],
  ];

  test.each(cases)('%s', (_title, value, expected) => {
    expect(isCalendarRange(value)).toEqual(expected);
  });
});

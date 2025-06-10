import { describe, test, expect } from 'vitest';

import { isCalendarDate } from './isCalendarDate';

describe('isCalendarDate', () => {
  const cases: [string, string | number | Date, boolean][] = [
    ['null', null, false],
    ['undefined', undefined, false],
    ['number', 12, true],
    ['Date', new Date(), true],
    ['string', 'test', false],
  ];

  test.each(cases)('%s', (_title, value, expected) => {
    expect(isCalendarDate(value)).toEqual(expected);
  });
});

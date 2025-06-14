import { describe, test, expect } from 'vitest';

import { rangeBehavior } from '../rangeBehavior/rangeBehavior';
import type {
  IEndPointRangeTime,
  TCalendarDateRange,
} from '../../../../declarations';

const mayTwentyEight = new Date('2025-05-28T14:30:00').getTime();
const mayTwentyNine = new Date('2025-05-29T14:30:00').getTime();
const mayTwentyEightStart = new Date('2025-05-28T00:00:00+02:00').getTime();
const mayTwentyNineEnd = new Date('2025-05-29T23:59:59.999+02:00').getTime();
const startRange: IEndPointRangeTime = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  milliseconds: 0,
};
const endRange: IEndPointRangeTime = {
  hours: 23,
  minutes: 59,
  seconds: 59,
  milliseconds: 999,
};

describe('components', () => {
  describe('behaviors', () => {
    describe('range', () => {
      const cases: [
        string,
        TCalendarDateRange,
        number,
        string,
        IEndPointRangeTime,
        IEndPointRangeTime,
        TCalendarDateRange,
      ][] = [
        [
          'range is empty',
          [],
          mayTwentyEight,
          'UTC+02:00',
          startRange,
          endRange,
          [mayTwentyEight],
        ],
        [
          'range contains older date',
          [mayTwentyNine],
          mayTwentyEight,
          'UTC+02:00',
          startRange,
          endRange,
          [mayTwentyEightStart, mayTwentyNineEnd],
        ],
        [
          'range contains newer date',
          [mayTwentyEight],
          mayTwentyNine,
          'UTC+02:00',
          startRange,
          endRange,
          [mayTwentyEightStart, mayTwentyNineEnd],
        ],
      ];

      test.each(cases)(
        '%s',
        (_title, range, ts, tz, startRange, endRange, expected) => {
          expect(
            rangeBehavior({ range, ts, tz, startRange, endRange }),
          ).toEqual(expected);
        },
      );
    });
  });
});

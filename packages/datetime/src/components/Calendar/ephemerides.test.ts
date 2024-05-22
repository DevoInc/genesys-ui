import { describe, test, expect } from 'vitest';
import { addDays } from 'date-fns';

import { getPrevDays, parseDays, getMonthDays } from './ephemerides';
import { parseNoFutureDates } from '../../parsers';
import { TParseDate } from '../../declarations';
import { gt } from '../../helpers';

describe('CalendarHelper', () => {
  describe('getMonthDays', () => {
    const cases: [string, number, number][] = [
      ['Dec 1th, 2022 has 31 days', new Date(2022, 11, 1).getTime(), 31],
      ['Nov 10th, 2022 has 30 prev days', new Date(2022, 10, 10).getTime(), 30],
      ['Feb 28th, 2022 has 28 prev days', new Date(2022, 1, 28).getTime(), 28],
    ];

    test.each(cases)('%s', (_title, ts, expected) => {
      expect(getMonthDays(ts)).toHaveLength(expected);
    });
  });

  describe('getPrevDays', () => {
    const cases: [string, number | Date, number, number][] = [
      ['Dec, 2024 has 0 prev days', new Date(2024, 11), 0, 0],
      ['Nov, 2024 has 5 prev days', new Date(2024, 10), 0, 5],
      ['Feb, 2024 has 4 prev days', new Date(2024, 1), 0, 4],
      ['Feb, 2024 starting on Monday has 3 prev days', new Date(2024, 1), 1, 3],
    ];

    test.each(cases)('%s', (_title, dt, weekStart, expected) => {
      expect(getPrevDays(dt, weekStart)).toEqual(expected);
    });
  });

  describe('parseDays', () => {
    const cases: [
      string,
      {
        dates: Date[];
        from: number;
        to: number;
        hover: number;
        hasLeftHoverEffect: boolean;
        hasRightHoverEffect: boolean;
        parseDate: TParseDate;
        lastDayOfMonth: number;
      },
      { value: string; classes: string; ts: number }[],
    ][] = [
      [
        'full range of days',
        {
          dates: [
            new Date(2022, 11, 1),
            new Date(2022, 11, 2),
            new Date(2022, 11, 3),
            new Date(2022, 11, 4),
            new Date(2022, 11, 5),
            new Date(2022, 11, 6),
            new Date(2022, 11, 7),
            addDays(new Date(2022, 12, 14), 1),
          ],
          from: new Date(2022, 11, 2).getTime(),
          to: new Date(2022, 11, 6).getTime(),
          hover: null,
          hasLeftHoverEffect: true,
          hasRightHoverEffect: true,
          parseDate: (dt) => {
            const isValid = !gt(dt, new Date(2022, 12, 14));
            return {
              isValid,
              value: dt,
              errors: isValid ? [] : ['Out of range'],
            };
          },
          lastDayOfMonth: 30,
        },
        [
          { value: '1', ts: new Date(2022, 11, 1).getTime(), classes: '' },
          {
            value: '2',
            ts: new Date(2022, 11, 2).getTime(),
            classes: 'selected from-selected highlight',
          },
          {
            value: '3',
            ts: new Date(2022, 11, 3).getTime(),
            classes: 'highlight',
          },
          {
            value: '4',
            ts: new Date(2022, 11, 4).getTime(),
            classes: 'highlight',
          },
          {
            value: '5',
            ts: new Date(2022, 11, 5).getTime(),
            classes: 'highlight',
          },
          {
            value: '6',
            ts: new Date(2022, 11, 6).getTime(),
            classes: 'selected to-selected highlight',
          },
          { value: '7', ts: new Date(2022, 11, 7).getTime(), classes: '' },
          {
            value: String(addDays(new Date(2022, 12, 14), 1).getDate()),
            classes: 'disabled',
            ts: addDays(new Date(2022, 12, 14), 1).getTime(),
          },
        ],
      ],
      [
        'short selected days',
        {
          dates: [
            new Date(2022, 11, 1),
            new Date(2022, 11, 2),
            new Date(2022, 11, 3),
            new Date(2022, 11, 4),
            new Date(2022, 11, 5),
          ],
          from: new Date(2022, 11, 2).getTime(),
          to: new Date(2022, 11, 4).getTime(),
          hover: null,
          hasLeftHoverEffect: true,
          hasRightHoverEffect: true,
          parseDate: parseNoFutureDates,
          lastDayOfMonth: 30,
        },
        [
          { value: '1', ts: new Date(2022, 11, 1).getTime(), classes: '' },
          {
            value: '2',
            ts: new Date(2022, 11, 2).getTime(),
            classes: 'selected from-selected highlight',
          },
          {
            value: '3',
            ts: new Date(2022, 11, 3).getTime(),
            classes: 'highlight',
          },
          {
            value: '4',
            ts: new Date(2022, 11, 4).getTime(),
            classes: 'selected to-selected highlight',
          },
          { value: '5', ts: new Date(2022, 11, 5).getTime(), classes: '' },
        ],
      ],
    ];

    test.each(cases)('%s', (_title, params, expected) => {
      expect(parseDays(params)).toEqual(expected);
    });
  });
});

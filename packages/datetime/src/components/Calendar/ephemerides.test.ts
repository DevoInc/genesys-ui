import { describe, test, expect } from 'vitest';
import { addDays } from 'date-fns';

import {
  getWeekDays,
  getPrevDays,
  getNextDays,
  parseDays,
  getMonthDays,
} from './ephemerides';

describe('CalendarHelper', () => {
  describe('getWeekDays', () => {
    const cases: [string, string, string[]][] = [
      ['locale es', 'es', ['lu', 'ma', 'mi', 'ju', 'vi', 'sá', 'do']],
      ['locale enUS', 'enUS', ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']],
      [
        'non existing locale use enUS',
        'invented',
        ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      ],
    ];

    test.each(cases)('%s', (_title, locale, expected) => {
      expect(getWeekDays(locale)).toEqual(expected);
    });
  });

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
    const cases: [string, number, number][] = [
      ['Dec 1th, 2022 has 3 prev days', new Date(2022, 11, 1).getTime(), 3],
      ['Nov 10th, 2022 has 1 prev days', new Date(2022, 10, 10).getTime(), 1],
      ['Feb 28th, 2022 has 1 prev days', new Date(2022, 1, 28).getTime(), 1],
    ];

    test.each(cases)('%s', (_title, ts, expected) => {
      expect(getPrevDays(ts)).toEqual(expected);
    });
  });

  describe('getNextDays', () => {
    const cases: [string, number, number][] = [
      ['Dec 1th, 2022 has 7 next days', new Date(2022, 11, 1).getTime(), 7],
      ['Nov 10th, 2022 has 10 prev days', new Date(2022, 10, 10).getTime(), 10],
      ['Feb 28th, 2022 has 12 prev days', new Date(2022, 1, 28).getTime(), 12],
    ];

    test.each(cases)('%s', (_title, ts, expected) => {
      expect(getNextDays(ts)).toEqual(expected);
    });
  });

  describe('parseDays', () => {
    const cases: [
      string,
      {
        days: Date[];
        from: number;
        to: number;
        hover: number;
        hasLeftHoverEffect: boolean;
        hasRightHoverEffect: boolean;
        validateDate: (ts: number) => boolean;
        invalidDates: number[];
        lastDayOfMonth: number;
      },
      { value: string; classes: string; ts: number }[],
    ][] = [
      [
        'full range of days',
        {
          days: [
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
          validateDate: (ts) => ts < new Date(2022, 12, 14).getTime(),
          invalidDates: [],
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
          days: [
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
          validateDate: (ts) => ts < new Date().getTime(),
          invalidDates: [],
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

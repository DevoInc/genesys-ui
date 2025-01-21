import {
  startOfDay,
  startOfHour,
  startOfMinute,
  startOfMonth,
  startOfWeek,
  startOfYear,
  subDays,
  subHours,
  subMinutes,
  subMonths,
  subSeconds,
  subYears,
  endOfDay,
  sub,
  endOfWeek,
  endOfMonth,
} from 'date-fns';

export const getDefaultRelativeRanges = (now = new Date().getTime()) => [
  { value: [subSeconds(now, 30).getTime(), now], label: 'Last 30 seconds' },
  { value: [subMinutes(now, 1).getTime(), now], label: 'Last minute' },
  { value: [subMinutes(now, 5).getTime(), now], label: 'Last 5 minutes' },
  { value: [subMinutes(now, 10).getTime(), now], label: 'Last 10 minutes' },
  { value: [subMinutes(now, 15).getTime(), now], label: 'Last 15 minutes' },
  { value: [subMinutes(now, 30).getTime(), now], label: 'Last 30 minutes' },
  { value: [subMinutes(now, 45).getTime(), now], label: 'Last 45 minutes' },
  { value: [subHours(now, 1).getTime(), now], label: 'Last hour' },
  { value: [subHours(now, 3).getTime(), now], label: 'Last 3 hours' },
  { value: [subHours(now, 6).getTime(), now], label: 'Last 6 hours' },
  { value: [subHours(now, 12).getTime(), now], label: 'Last 12 hours' },
  { value: [subDays(now, 1).getTime(), now], label: 'Last 1 day' },
  { value: [subDays(now, 2).getTime(), now], label: 'Last 2 days' },
  { value: [subDays(now, 7).getTime(), now], label: 'Last 7 days' },
  { value: [subDays(now, 15).getTime(), now], label: 'Last 15 days' },
  { value: [subMonths(now, 1).getTime(), now], label: 'Last month' },
  { value: [subMonths(now, 2).getTime(), now], label: 'Last 2 months' },
  { value: [subMonths(now, 3).getTime(), now], label: 'Last 3 months' },
  { value: [subMonths(now, 6).getTime(), now], label: 'Last 6 months' },
  { value: [subYears(now, 1).getTime(), now], label: 'Last year' },
];

export const getDefaultSnapRanges = (now = new Date().getTime()) => [
  { value: [startOfMinute(now).getTime(), now], label: 'Minute' },
  { value: [startOfHour(now).getTime(), now], label: 'Hour' },
  { value: [startOfDay(now).getTime(), now], label: 'Day' },
  {
    value: [
      startOfDay(sub(now, { days: 1 })).getTime(),
      endOfDay(sub(now, { days: 1 })).getTime(),
    ],
    label: 'Last day',
  },
  { value: [startOfWeek(now).getTime(), now], label: 'Week' },
  {
    value: [
      startOfWeek(sub(now, { weeks: 1 })).getTime(),
      endOfWeek(sub(now, { weeks: 1 })).getTime(),
    ],
    label: 'Last week',
  },
  { value: [startOfMonth(now).getTime(), now], label: 'Month' },
  {
    value: [
      startOfMonth(sub(now, { months: 1 })).getTime(),
      endOfMonth(sub(now, { months: 1 })).getTime(),
    ],
    label: 'Last month',
  },
  { value: [startOfYear(now).getTime(), now], label: 'Year' },
];

export const getDefaultPresets = (now = new Date().getTime()) => [
  { label: 'Relative to' },
  ...getDefaultRelativeRanges(now),
  { label: 'Snap to' },
  ...getDefaultSnapRanges(now),
];

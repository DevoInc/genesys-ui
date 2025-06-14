import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';
import { isWeekend, getDate, set } from 'date-fns';
import { tz as tzFn, TZDate } from '@date-fns/tz';

import { Calendar } from './Calendar';
import { useCalendarRange, useCalendarSingle } from './hooks';

const meta: Meta<typeof Calendar> = {
  title: 'Components/Datetime/Calendar',
  component: Calendar,
};

export default meta;
type Story = StoryObj<typeof Calendar>;

const now = new TZDate(2024, 5, 1);
const singleValue = [set(now, { date: 10 })];
const rangeValue = [set(now, { date: 10 }), set(now, { date: 20 })];

export const Playground: Story = {
  tags: ['isHidden'],
  args: {
    monthDate: now,
    value: rangeValue,
    selectionLength: 2,
    parseDate: (dt: Date | number) => {
      const weekend = isWeekend(dt);
      const even = getDate(dt) % 2 === 0;
      return {
        isValid: !weekend && !even,
        value: dt,
        errors: [
          ...(weekend ? ['Is weekend'] : []),
          ...(even ? ['Is even'] : []),
        ],
      };
    },
  },
  render: (props) => {
    const { range, handleNewDate } = useCalendarRange(props.value);
    return <Calendar {...props} value={range} onClick={handleNewDate} />;
  },
};

export const Single: Story = {
  tags: ['isHidden'],
  args: {
    monthDate: now,
    value: singleValue,
  },
};

export const ParseDate: Story = {
  tags: ['isHidden'],
  render: (props) => {
    const { range, handleNewDate } = useCalendarRange(rangeValue);
    return (
      <Calendar
        {...props}
        monthDate={now}
        selectionLength={2}
        value={range}
        onClick={handleNewDate}
        parseDate={(dt: Date | number) => {
          const weekend = isWeekend(dt);
          const even = getDate(dt) % 2 === 0;
          return {
            isValid: !weekend && !even,
            value: dt,
            errors: [
              ...(weekend ? ['Is weekend'] : []),
              ...(even ? ['Is even'] : []),
            ],
          };
        }}
      />
    );
  },
};

export const MinMaxDate: Story = {
  tags: ['isHidden'],
  render: (props) => {
    const { range, handleNewDate } = useCalendarRange(rangeValue);
    return (
      <Calendar
        {...props}
        monthDate={now}
        value={range}
        selectionLength={2}
        onClick={handleNewDate}
        minDate={set(now, { date: 6 })}
        maxDate={set(now, { date: 26 })}
      />
    );
  },
};

export const Disabled: Story = {
  tags: ['isHidden'],
  args: {
    disabled: true,
    monthDate: now,
    value: singleValue,
  },
};

export const I18n: Story = {
  tags: ['isHidden'],
  args: {
    weekDays: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
    weekStart: 1,
    monthDate: now,
    value: singleValue,
    maxDate: set(now, { date: 20 }),
    i18n: {
      outOfRange: 'Fuera de rango',
    },
  },
};

export const SingleHook: Story = {
  tags: ['isHidden'],
  render: () => {
    const { handleNewDate, range } = useCalendarSingle(singleValue);
    return <Calendar monthDate={now} value={range} onClick={handleNewDate} />;
  },
};

export const RangeHook: Story = {
  tags: ['isHidden'],
  render: () => {
    const { range, handleNewDate } = useCalendarRange(rangeValue);
    return (
      <Calendar
        monthDate={now}
        value={range}
        selectionLength={2}
        onClick={handleNewDate}
      />
    );
  },
};

const tz = 'UTC-10:00';
const nowTZ = new TZDate(2025, 6, 1, tz);
const rangeValueTZ = [
  set(nowTZ, { date: 10 }, { in: tzFn(tz) }),
  set(nowTZ, { date: 20 }, { in: tzFn(tz) }),
];

export const Timezone: Story = {
  tags: ['isHidden'],
  args: {
    monthDate: nowTZ,
    value: rangeValueTZ,
    tz,
  },
};

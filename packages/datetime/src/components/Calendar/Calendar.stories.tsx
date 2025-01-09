import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { isWeekend, getDate, set } from 'date-fns';

import { Calendar } from './Calendar';
import { useCalendarRange, useCalendarSingle } from './hooks';

const meta: Meta<typeof Calendar> = {
  title: 'Components/Datetime/Calendar',
  component: Calendar,
};

export default meta;
type Story = StoryObj<typeof Calendar>;

const now = new Date(2024, 5, 1);
const singleValue = [set(now, { date: 10 })];
const rangeValue = [set(now, { date: 10 }), set(now, { date: 20 })];

export const Playground: Story = {
  args: {
    monthDate: now,
    value: rangeValue,
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
  render: () => {
    const { hasLeftHoverEffect, hasRightHoverEffect, range, handleNewDate } =
      useCalendarRange(rangeValue);
    return (
      <Calendar
        monthDate={now}
        value={range}
        hasLeftHoverEffect={hasLeftHoverEffect}
        hasRightHoverEffect={hasRightHoverEffect}
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
  render: () => {
    const { hasLeftHoverEffect, hasRightHoverEffect, range, handleNewDate } =
      useCalendarRange(rangeValue);
    return (
      <Calendar
        monthDate={now}
        value={range}
        hasLeftHoverEffect={hasLeftHoverEffect}
        hasRightHoverEffect={hasRightHoverEffect}
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
    const { hasLeftHoverEffect, hasRightHoverEffect, range, handleNewDate } =
      useCalendarRange(rangeValue);

    return (
      <Calendar
        monthDate={now}
        value={range}
        hasLeftHoverEffect={hasLeftHoverEffect}
        hasRightHoverEffect={hasRightHoverEffect}
        onClick={handleNewDate}
      />
    );
  },
};

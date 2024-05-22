import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { startOfMonth, addDays, subDays, endOfMonth } from 'date-fns';

import { Calendar } from './Calendar';
import { useCalendarRange, useCalendarSingle } from './hooks';

const meta: Meta<typeof Calendar> = {
  title: 'Components/Datetime/Calendar',
  component: Calendar,
};

export default meta;
type Story = StoryObj<typeof Calendar>;

const now = new Date();

export const Base: Story = {
  args: {
    monthDate: now,
    range: [addDays(startOfMonth(now), 10), subDays(endOfMonth(now), 10)],
  },
};

export const Single: Story = {
  tags: ['isHidden'],
  args: {
    monthDate: now,
    hasLeftHoverEffect: false,
    hasRightHoverEffect: false,
    range: [now],
  },
};

export const I18n: Story = {
  tags: ['isHidden'],
  args: {
    weekDays: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
    weekStart: 1,
  },
};
I18n.storyName = 'I18n';

export const SingleHook: Story = {
  tags: ['isHidden'],
  render: () =>
    (() => {
      const { handleNewDate, range } = useCalendarSingle([new Date()]);
      return (
        <Calendar
          hasLeftHoverEffect={false}
          hasRightHoverEffect={false}
          monthDate={new Date(2022, 0)}
          range={range}
          onClick={handleNewDate}
        />
      );
    })(),
};

export const RangeHook: Story = {
  tags: ['isHidden'],
  render: () =>
    (() => {
      const { hasLeftHoverEffect, hasRightHoverEffect, range, handleNewDate } =
        useCalendarRange([
          new Date(1993, 10, 7).getTime(),
          new Date(1993, 10, 10).getTime(),
        ]);

      return (
        <Calendar
          monthDate={new Date('10-10-1993')}
          range={range}
          hasLeftHoverEffect={hasLeftHoverEffect}
          hasRightHoverEffect={hasRightHoverEffect}
          onClick={handleNewDate}
        />
      );
    })(),
};

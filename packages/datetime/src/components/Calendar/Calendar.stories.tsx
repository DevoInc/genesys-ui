import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { startOfMonth, addDays, subDays, endOfMonth } from 'date-fns';

import { Calendar } from './Calendar';
import {
  useCalendarForwardBackward,
  useCalendarForward,
  useCalendarSingleDay,
} from './hooks';

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
    selectedDates: [
      addDays(startOfMonth(now), 10),
      subDays(endOfMonth(now), 10),
    ],
  },
};

export const Single: Story = {
  tags: ['isHidden'],
  args: {
    monthDate: now,
    hasLeftHoverEffect: false,
    hasRightHoverEffect: false,
    selectedDates: [now],
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

export const HookSingleDay: Story = {
  tags: ['isHidden'],
  render: () =>
    (() => {
      const {
        handleDateChange,
        hasLeftHoverEffect: hasLeftHoverEffect,
        hasRightHoverEffect: hasRightHoverEffect,
        selectedDates,
      } = useCalendarSingleDay([new Date()]);
      return (
        <Calendar
          hasLeftHoverEffect={hasLeftHoverEffect}
          hasRightHoverEffect={hasRightHoverEffect}
          monthDate={new Date(2022, 0)}
          selectedDates={selectedDates}
          onClick={handleDateChange}
        />
      );
    })(),
  parameters: {
    controls: false,
  },
};

export const HookForward: Story = {
  tags: ['isHidden'],
  render: () =>
    (() => {
      const {
        handleDateChange,
        hasLeftHoverEffect,
        hasRightHoverEffect,
        selectedDates,
      } = useCalendarForward([new Date('10-7-1993'), new Date('10-10-1993')]);
      return (
        <Calendar
          monthDate={new Date('10-10-1993')}
          selectedDates={selectedDates}
          hasLeftHoverEffect={hasLeftHoverEffect}
          hasRightHoverEffect={hasRightHoverEffect}
          onClick={handleDateChange}
        />
      );
    })(),
  parameters: {
    controls: false,
  },
};

export const HookForwardBackward: Story = {
  tags: ['isHidden'],
  render: () =>
    (() => {
      const {
        handleDateChange,
        hasLeftHoverEffect,
        hasRightHoverEffect,
        selectedDates,
      } = useCalendarForwardBackward([
        new Date('10-7-1993').getTime(),
        new Date('10-10-1993').getTime(),
      ]);

      return (
        <Calendar
          monthDate={new Date('10-10-1993')}
          selectedDates={selectedDates}
          hasLeftHoverEffect={hasLeftHoverEffect}
          hasRightHoverEffect={hasRightHoverEffect}
          onClick={handleDateChange}
        />
      );
    })(),
  parameters: {
    controls: false,
  },
};

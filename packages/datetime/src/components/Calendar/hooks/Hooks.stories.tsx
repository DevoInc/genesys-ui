import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Calendar } from '../Calendar';
import {
  useCalendarForwardBackwardBehavior,
  useCalendarForwardBehavior,
  useCalendarSingleDayBehavior,
} from './';

const meta: Meta<typeof Calendar> = {
  title: 'Components/Datetime/Calendar/Hooks',
  component: Calendar,
  args: {
    disableHoverDay: false,
    hasLeftHoverEffect: true,
    hasRightHoverEffect: true,
    weekDays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
  },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const SingleDayBehavior: Story = {
  render: () =>
    (() => {
      const {
        handleDateChange,
        hasLeftHoverEffect: hasLeftHoverEffect,
        hasRightHoverEffect: hasRightHoverEffect,
        selectedDates,
      } = useCalendarSingleDayBehavior({
        day: null,
      });
      return (
        <Calendar
          hasLeftHoverEffect={hasLeftHoverEffect}
          hasRightHoverEffect={hasRightHoverEffect}
          dateForMonth={new Date(2022, 0).getTime()}
          selectedDates={selectedDates}
          onClick={handleDateChange}
        />
      );
    })(),
  parameters: {
    controls: false,
  },
};

export const ForwardBehavior: Story = {
  render: () =>
    (() => {
      const {
        handleDateChange,
        hasLeftHoverEffect,
        hasRightHoverEffect,
        selectedDates,
      } = useCalendarForwardBehavior({
        from: new Date('10-7-1993').getTime(),
        to: new Date('10-10-1993').getTime(),
      });
      return (
        <Calendar
          dateForMonth={new Date('10-10-1993').getTime()}
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

export const ForwardBackwardBehavior: Story = {
  render: () =>
    (() => {
      const {
        handleDateChange,
        hasLeftHoverEffect,
        hasRightHoverEffect,
        selectedDates,
      } = useCalendarForwardBackwardBehavior({
        from: new Date('10-7-1993').getTime(),
        to: new Date('10-10-1993').getTime(),
      });

      return (
        <Calendar
          dateForMonth={new Date('10-10-1993').getTime()}
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

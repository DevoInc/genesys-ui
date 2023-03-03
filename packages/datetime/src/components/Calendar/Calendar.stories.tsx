import { Meta, StoryObj } from '@storybook/react';
import { Calendar } from './Calendar';

const meta: Meta<typeof Calendar> = {
  title: 'Components/Datetime/Calendar',
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

export const Base: Story = {
  args: {
    dateForMonth: new Date(2018, 5, 20, 17, 0).getTime(),
    selectedDates: {
      from: new Date(2018, 5, 15, 17, 0).getTime(),
      to: new Date(2018, 5, 26, 17, 0).getTime(),
    },
  },
};

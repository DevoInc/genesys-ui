import { Meta, StoryObj } from '@storybook/react';

import { DateTime } from './DateTime';

const meta: Meta<typeof DateTime> = {
  title: 'Components/Datetime/DateTime',
  component: DateTime,
  args: {
    ariaLabelMonth: 'month',
    ariaLabelTime: 'time',
    hasTime: true,
    hasMillis: false,
    hasSeconds: true,
    onChange: (ts: number) => {
      console.log('Here onChange', ts, new Date(ts));
    },
    validateDate: (ts) => ts < new Date().getTime(),
    weekDays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
  },
};

export default meta;
type Story = StoryObj<typeof DateTime>;

export const Base: Story = {};

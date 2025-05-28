import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { Time } from './Time';

const meta: Meta<typeof Time> = {
  title: 'Components/Datetime/Time',
  component: Time,
};

export default meta;
type Story = StoryObj<typeof Time>;

export const Playground: Story = {
  args: {
    value: new Date(),
    hasMillis: true,
  },
  render: (args) =>
    ((props) => {
      const [value, setValue] = React.useState<number | Date>(props.value);
      return (
        <Time
          {...props}
          value={value}
          onChange={(ts: number) => {
            setValue(ts);
          }}
        />
      );
    })(args),
};

export const Limits: Story = {
  tags: ['isHidden'],
  render: () =>
    (() => {
      const [value, setValue] = React.useState<number | Date>(
        new Date(2024, 7, 9, 10, 30, 15, 300),
      );
      return (
        <Time
          value={value}
          onChange={(ts: number) => {
            setValue(ts);
          }}
          minDate={new Date(2024, 7, 9, 9)}
          maxDate={new Date(2024, 7, 9, 18)}
        />
      );
    })(),
};

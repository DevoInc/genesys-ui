import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { DateTimePicker } from './DateTimePicker';

const meta: Meta<typeof DateTimePicker> = {
  title: 'Components/Datetime/DateTimePicker',
  component: DateTimePicker,
  args: {
    value: new Date().getTime(),
  },
};

export default meta;
type Story = StoryObj<typeof DateTimePicker>;

export const Playground: Story = {
  render: (args) =>
    ((props) => {
      const [value, setValue] = React.useState(props.value);
      return (
        <DateTimePicker
          {...props}
          value={value}
          onChange={(ts: number) => {
            setValue(ts);
          }}
        />
      );
    })(args),
  args: {
    value: new Date().getTime(),
  },
};

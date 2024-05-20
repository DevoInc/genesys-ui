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

export const Base: Story = {
  render: (args) =>
    ((props) => {
      const [value, setValue] = React.useState(props.value);
      console.log({ 'sb-value': new Date(value) });
      return (
        <div style={{ width: '400px' }}>
          <DateTimePicker
            {...props}
            value={value}
            onChange={(ts: number) => {
              console.log(`CHANGED ${new Date(ts)}`);
              setValue(ts);
            }}
          />
        </div>
      );
    })(args),
  args: {
    value: new Date().getTime(),
  },
};

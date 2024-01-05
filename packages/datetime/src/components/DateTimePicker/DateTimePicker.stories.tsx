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
    ((args) => {
      const [date, setDate] = React.useState(args.value);

      const onChange = (event) => {
        const target = event.target as HTMLInputElement;
        if (!target.validity.valid) return;
        const date = new Date(target.value).getTime();
        setDate(date);
      };

      return (
        <div style={{ width: '400px' }}>
          <DateTimePicker {...args} value={date} onChange={onChange} />
        </div>
      );
    })(args),
  args: {
    value: new Date().getTime(),
  },
};

import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { DateTimePicker } from './DateTimePicker';

const meta: Meta<typeof DateTimePicker> = {
  title: 'Components/Datetime/DateTimePicker',
  component: DateTimePicker,
  args: {
    value: new Date().getTime(),
    onApply: (ts: number) => {
      console.log('Apply clicked', new Date(ts));
    },
    onCancel: () => {
      console.log('Cancel clicked');
    },
  },
};

export default meta;
type Story = StoryObj<typeof DateTimePicker>;

export const Base: Story = {
  render: (args) =>
    ((args) => {
      const [date, setDate] = React.useState(args.value);

      const onApply = (ts: number) => {
        setDate(ts);
      };

      const onChange = (event) => {
        const target = event.target as HTMLInputElement;
        if (!target.validity.valid) return;
        const date = new Date(target.value).getTime();
        setDate(date);
      };

      return (
        <DateTimePicker
          {...args}
          value={date}
          onApply={onApply}
          onChange={onChange}
        />
      );
    })(args),
  args: {
    value: new Date().getTime(),
  },
};

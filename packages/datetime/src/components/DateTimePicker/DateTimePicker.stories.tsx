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
      const [date, setDate] = React.useState(props.value);

      const onChange = (event) => {
        const target = event.target as HTMLInputElement;
        if (!target.validity.valid) return;
        const d = new Date(target.value).getTime();
        setDate(d);
      };

      return (
        <div style={{ width: '400px' }}>
          <DateTimePicker {...props} value={date} onChange={onChange} />
        </div>
      );
    })(args),
  args: {
    value: new Date().getTime(),
  },
};

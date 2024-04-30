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

      const onChangeCallback = React.useCallback((ts: number) => {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        console.log(`CHANGED ${new Date(ts)}`);
        setDate(ts);
      }, []);

      return (
        <div style={{ width: '400px' }}>
          <DateTimePicker {...props} value={date} onChange={onChangeCallback} />
        </div>
      );
    })(args),
  args: {
    value: new Date().getTime(),
  },
};

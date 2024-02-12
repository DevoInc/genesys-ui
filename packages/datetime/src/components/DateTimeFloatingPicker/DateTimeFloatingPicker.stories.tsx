import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { DateTimeFloatingPicker } from './DateTimeFloatingPicker';

const meta: Meta<typeof DateTimeFloatingPicker> = {
  title: 'Components/Datetime/DateTimeFloatingPicker',
  component: DateTimeFloatingPicker,
  args: {
    value: new Date().getTime(),
    onApply: (ts: number) => {
      // eslint-disable-next-line no-console
      console.log('Apply clicked', new Date(ts));
    },
    onCancel: () => {
      // eslint-disable-next-line no-console
      console.log('Cancel clicked');
    },
  },
};

export default meta;
type Story = StoryObj<typeof DateTimeFloatingPicker>;

export const Base: Story = {
  render: (args) =>
    ((props) => {
      const [date, setDate] = React.useState(props.value);

      const onApply = (ts: number) => {
        setDate(ts);
      };

      const onChange = (event) => {
        const target = event.target as HTMLInputElement;
        if (!target.validity.valid) return;
        const d = new Date(target.value).getTime();
        setDate(d);
      };

      return (
        <DateTimeFloatingPicker
          {...props}
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

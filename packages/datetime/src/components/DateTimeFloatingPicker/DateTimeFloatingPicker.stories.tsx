import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { DateTimeFloatingPicker } from './DateTimeFloatingPicker';

const meta: Meta<typeof DateTimeFloatingPicker> = {
  title: 'Components/Datetime/DateTimeFloatingPicker',
  component: DateTimeFloatingPicker,
  args: {
    value: new Date().getTime(),
    label: 'My calendar',
  },
};

export default meta;
type Story = StoryObj<typeof DateTimeFloatingPicker>;

export const Base: Story = {
  render: (args) =>
    ((props) => {
      const [date, setDate] = React.useState(props.value);

      return (
        <DateTimeFloatingPicker
          {...props}
          value={date}
          onChange={(ts) => {
            setDate(ts);
            console.log(`date changed ${ts}`);
          }}
        />
      );
    })(args),
  args: {
    value: new Date().getTime(),
    label: 'My calendar',
  },
};

export const WithButtons: Story = {
  name: 'With apply and cancel buttons',
  render: (args) =>
    ((props) => {
      const [date, setDate] = React.useState(props.value);
      const onApply = (ts: number) => {
        setDate(ts);
        console.log(`Apply ${ts}`);
      };

      const onCancel = () => {
        console.log('Cancel button pressed');
      };

      return (
        <DateTimeFloatingPicker
          {...props}
          value={date}
          onApply={onApply}
          onChange={(ts) => {
            console.log(`OnChange ${ts}`);
          }}
          onCancel={onCancel}
          onClose={onCancel}
        />
      );
    })(args),
  args: {
    value: new Date().getTime(),
  },
};

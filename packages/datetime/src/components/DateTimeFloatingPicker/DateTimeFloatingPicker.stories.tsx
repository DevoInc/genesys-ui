import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { DateTimeFloatingPicker } from './DateTimeFloatingPicker';

const meta: Meta<typeof DateTimeFloatingPicker> = {
  title: 'Components/Datetime/DateTimeFloatingPicker',
  component: DateTimeFloatingPicker,
  args: {
    value: new Date().getTime(),
  },
};

export default meta;
type Story = StoryObj<typeof DateTimeFloatingPicker>;

export const Base: Story = {
  render: (args) =>
    ((props) => {
      const [date, setDate] = React.useState(props.value);

      const onChange = (event) => {
        const target = event.target as HTMLInputElement;
        setDate(target.value);
      };

      return (
        <DateTimeFloatingPicker
          {...props}
          value={date}
          onInputBlur={(e) => {
            console.log('onBlurInput', e);
          }}
          onInputKeyUp={(e) => {
            console.log('onKeyUpInput', e);
          }}
          onInputChange={(e) => {
            console.log('onChangeInput', e);
          }}
          onChangeCalendar={(ts) => setDate(ts)}
        />
      );
    })(args),
  args: {
    value: new Date().getTime(),
  },
};

export const WithButtons: Story = {
  name: 'With apply and cancel buttons',
  render: (args) =>
    ((props) => {
      const [initDateValue, setInitDateValue] = React.useState(props.value);
      const [date, setDate] = React.useState(props.value);

      const onApply = (ts: number) => {
        setDate(ts);
        setInitDateValue(ts);
      };

      const onChange = (event) => {
        const target = event.target as HTMLInputElement;
        if (!target.validity.valid) return;
        const d = new Date(target.value).getTime();
        setDate(d);
      };

      const onCancel = () => {
        setDate(initDateValue);
      };

      return (
        <DateTimeFloatingPicker
          {...props}
          value={date}
          onApply={onApply}
          onChange={onChange}
          onChangeCalendar={(ts) => setDate(ts)}
          onCancel={onCancel}
          onClose={onCancel}
        />
      );
    })(args),
  args: {
    value: new Date().getTime(),
  },
};

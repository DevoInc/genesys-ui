import * as React from 'react';
import { endOfMonth, startOfMonth, subMonths } from 'date-fns';
import { Meta, StoryObj } from '@storybook/react';

import { MonthPicker } from './MonthPicker';

const meta: Meta<typeof MonthPicker> = {
  title: 'Components/Datetime/MonthPicker',
  component: MonthPicker,
};

export default meta;
type Story = StoryObj<typeof MonthPicker>;

const nowDate = new Date();

export const Playground: Story = {
  args: {
    value: nowDate,
    maxDate: endOfMonth(nowDate),
    minDate: startOfMonth(subMonths(nowDate, 12 * 20)),
  },
  render: (props) => {
    const [value, setValue] = React.useState(props.value);
    return (
      <MonthPicker
        {...props}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
    );
  },
};

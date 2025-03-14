import * as React from 'react';
import { endOfMonth, startOfMonth, subMonths } from 'date-fns';
import { Meta, StoryObj } from '@storybook/react';

import { MonthFloatingPicker } from './MonthFloatingPicker';

const meta: Meta<typeof MonthFloatingPicker> = {
  title: 'Components/Datetime/MonthFloatingPicker',
  component: MonthFloatingPicker,
};

export default meta;
type Story = StoryObj<typeof MonthFloatingPicker>;

const nowDate = new Date();

export const Playground: Story = {
  args: {
    value: nowDate,
    maxDate: endOfMonth(nowDate),
    minDate: startOfMonth(subMonths(nowDate, 240)),
  },
  render: (props) => {
    const [value, setValue] = React.useState(props.value);
    return (
      <MonthFloatingPicker
        {...props}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
    );
  },
};

export const YearSelectionInline: Story = {
  args: {
    value: nowDate,
    maxDate: endOfMonth(nowDate),
    minDate: startOfMonth(subMonths(nowDate, 240)),
    yearSelectorInline: true,
    closeAfterSelect: false,
  },
  render: (props) => {
    const [value, setValue] = React.useState(props.value);
    return (
      <MonthFloatingPicker
        {...props}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
      />
    );
  },
};

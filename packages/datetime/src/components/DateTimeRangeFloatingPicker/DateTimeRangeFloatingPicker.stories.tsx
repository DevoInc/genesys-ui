import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { subMonths } from 'date-fns';

import { DateTimeRangeFloatingPicker } from './DateTimeRangeFloatingPicker';
import { onApply } from './__stories__/utils';

const meta: Meta<typeof DateTimeRangeFloatingPicker> = {
  title: 'Components/Datetime/DateTimeRangeFloatingPicker',
  component: DateTimeRangeFloatingPicker,
  args: {
    value: {
      from: subMonths(new Date(), 1).getTime(),
      to: new Date().getTime(),
    },
    id: 'story-demo',
  },
};

export default meta;
type Story = StoryObj<typeof DateTimeRangeFloatingPicker>;

export const Base: Story = {
  render: (args) =>
    ((props) => {
      const [date, setDate] = React.useState(props.value);

      return (
        <DateTimeRangeFloatingPicker
          {...props}
          value={date}
          onApply={onApply(setDate)}
          onChange={(range) => {
            console.log('Has changed', range);
          }}
        />
      );
    })(args),
};

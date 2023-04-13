import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { subMonths } from 'date-fns';

import { DateTimeRangePicker } from './DateTimeRangePicker';
import { onApply, onChange } from './__stories__/utils';

const meta: Meta<typeof DateTimeRangePicker> = {
  title: 'Components/Datetime/DateTimeRangePicker',
  component: DateTimeRangePicker,
  args: {
    value: {
      from: subMonths(new Date(), 1).getTime(),
      to: new Date().getTime(),
    },
    id: 'story-demo',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof DateTimeRangePicker>;

export const Base: Story = {
  render: (args) =>
    ((args) => {
      const [date, setDate] = React.useState(args.value);

      return (
        <DateTimeRangePicker
          {...args}
          value={date}
          onApply={onApply(setDate)}
          onChange={onChange(setDate)}
        />
      );
    })(args),
};

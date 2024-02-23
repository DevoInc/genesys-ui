import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { subMonths } from 'date-fns';

import { DateTimeRangePicker } from './DateTimeRangePicker';
import { onApply, onChange } from './__stories__/utils';
import { useDefaultPresets } from '../Presets';

const meta: Meta<typeof DateTimeRangePicker> = {
  title: 'Components/Datetime/DateTimeRangePicker/Cases',
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

export const WithPresets: Story = {
  render: (args) =>
    ((props) => {
      const [date, setDate] = React.useState(props.value);

      const presets = useDefaultPresets();

      return (
        <DateTimeRangePicker
          {...props}
          value={date}
          onApply={onApply(setDate)}
          onChange={onChange(setDate)}
          presets={presets}
        />
      );
    })(args),
};

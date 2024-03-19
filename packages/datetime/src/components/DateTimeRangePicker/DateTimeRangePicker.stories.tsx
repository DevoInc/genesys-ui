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
    ((props) => {
      const [date, setDate] = React.useState(props.value);

      return (
        <DateTimeRangePicker
          {...props}
          value={date}
          onApply={onApply(setDate)}
          onChange={onChange(setDate)}
          onRealTimeClick={(event) => {
            console.log('He pisado RT', event);
          }}
          presets={[
            {
              label: 'Relative too',
              options: [
                {
                  value: {
                    from: 'now() - 30s',
                    to: 'now()',
                  },
                  label: 'Last 30 seconds',
                },
                {
                  value: {
                    from: 'now() - 1m',
                    to: 'now()',
                  },
                  label: 'Last minute',
                },
              ],
            },
          ]}
        />
      );
    })(args),
};

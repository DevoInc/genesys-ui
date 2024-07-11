import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { DateTime } from './DateTime';

const meta: Meta<typeof DateTime> = {
  title: 'Components/Datetime/DateTime',
  component: DateTime,
  args: {
    onChange: console.log,
  },
};

export default meta;
type Story = StoryObj<typeof DateTime>;

export const Base: Story = {
  render: () =>
    (() => {
      const [value, setValue] = React.useState<number | Date>(new Date());
      const [monthDate, setMonthDate] = React.useState<Date | number>(
        new Date().getTime(),
      );

      return (
        <DateTime
          onChange={(ts) => {
            setValue(ts);
          }}
          monthDate={monthDate}
          onChangeMonthDate={(dt) => {
            setMonthDate(dt);
          }}
          value={value}
        />
      );
    })(),
};

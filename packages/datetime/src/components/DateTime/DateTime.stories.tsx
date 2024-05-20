import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { DateTime } from './DateTime';
import { parseDateNoFuture } from '../Calendar/defaults';

const meta: Meta<typeof DateTime> = {
  title: 'Components/Datetime/DateTime',
  component: DateTime,
  args: {
    onChange: (ts: number) => {
      // eslint-disable-next-line no-console
      console.log('Here onChange', ts, new Date(ts));
    },
    parseDate: parseDateNoFuture,
  },
};

export default meta;
type Story = StoryObj<typeof DateTime>;

export const Base: Story = {};

export const Test: Story = {
  render: () =>
    (() => {
      const [value, setValue] = React.useState(new Date().getTime());
      const [monthDate, setMonthDate] = React.useState<Date | number>(
        new Date().getTime(),
      );

      console.log({ 'sb-value': new Date(value) });
      return (
        <>
          <button
            onClick={() => {
              setValue(new Date().getTime());
            }}
          >
            set today
          </button>
          <DateTime
            onChange={(ts) => {
              setValue(new Date(ts).getTime());
            }}
            monthDate={monthDate}
            onChangeMonthDate={(dt) => {
              setMonthDate(dt);
            }}
            value={value}
          />
        </>
      );
    })(),
};

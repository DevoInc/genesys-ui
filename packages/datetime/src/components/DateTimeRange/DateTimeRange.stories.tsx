import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { DateTimeRange } from './DateTimeRange';
import { useTimeRangePreserve } from './hooks';
import { getDefaultPresets } from '../Presets';
import type { TDateRange } from '../../declarations';
import { TZDate } from '@date-fns/tz';

const meta: Meta<typeof DateTimeRange> = {
  title: 'Components/Datetime/DateTimeRange',
  component: DateTimeRange,
};

export default meta;
type Story = StoryObj<typeof DateTimeRange>;

export const Playground: Story = {
  args: {
    mode: 'both',
    presets: getDefaultPresets(),
  },
  render: (props) => {
    const [value, setValue] = React.useState<TDateRange>([]);
    const [monthDate, setMonthDate] = React.useState<number | Date>(new Date());

    return (
      <DateTimeRange
        {...props}
        value={value}
        onChange={setValue}
        monthDate={monthDate}
        onChangeMonthDate={(dt) => {
          setMonthDate(dt);
        }}
      />
    );
  },
};

export const PreservingTime: Story = {
  tags: ['isHidden'],
  render: (props) => {
    const [value, setValue] = React.useState<(number | Date)[]>([]);
    const [monthDate, setMonthDate] = React.useState<number | Date>(new Date());
    const { onChangeRange } = useTimeRangePreserve(setValue);

    return (
      <DateTimeRange
        {...props}
        value={value}
        onChange={onChangeRange}
        monthDate={monthDate}
        onChangeMonthDate={(dt) => {
          setMonthDate(dt);
        }}
      />
    );
  },
};

const tz = 'UTC-10:00';
const nowTZ = new TZDate(2025, 6, 1, tz);
export const Timezone: Story = {
  tags: ['isHidden'],
  args: {
    mode: 'both',
    presets: getDefaultPresets(),
    tz,
  },
  render: (props) => {
    const [value, setValue] = React.useState<TDateRange>([]);
    const [monthDate, setMonthDate] = React.useState<number | Date>(nowTZ);

    return (
      <DateTimeRange
        {...props}
        value={value}
        onChange={setValue}
        monthDate={monthDate}
        onChangeMonthDate={(dt) => {
          setMonthDate(dt);
        }}
      />
    );
  },
};

import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { DateTimeRange } from './DateTimeRange';
import { useTimeRangePreserve } from './hooks';
import { getDefaultPresets } from '../Presets';
import type { TDateRange } from '../../declarations';

const meta: Meta<typeof DateTimeRange> = {
  title: 'Components/Datetime/DateTimeRange',
  component: DateTimeRange,
};

export default meta;
type Story = StoryObj<typeof DateTimeRange>;

export const Playground: Story = {
  render: () =>
    ((args) => {
      const [value, setValue] = React.useState<TDateRange>([]);
      const [monthDate, setMonthDate] = React.useState<number | Date>(
        new Date(),
      );

      return (
        <DateTimeRange
          {...args}
          value={value}
          onChange={setValue}
          monthDate={monthDate}
          onChangeMonthDate={(dt) => {
            setMonthDate(dt);
          }}
          mode='both'
          presets={getDefaultPresets()}
        />
      );
    })(),
};

export const PreservingTime: Story = {
  tags: ['isHidden'],
  render: () =>
    ((args) => {
      const [value, setValue] = React.useState<(number | Date)[]>([]);
      const [monthDate, setMonthDate] = React.useState<number | Date>(
        new Date(),
      );
      const { onChangeRange } = useTimeRangePreserve(setValue);

      return (
        <DateTimeRange
          {...args}
          value={value}
          onChange={onChangeRange}
          monthDate={monthDate}
          onChangeMonthDate={(dt) => {
            setMonthDate(dt);
          }}
        />
      );
    })(),
};

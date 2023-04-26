import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { subDays } from 'date-fns';

import { DateTimeRange } from './DateTimeRange';

const meta: Meta<typeof DateTimeRange> = {
  title: 'Components/Datetime/DateTimeRange',
  component: DateTimeRange,
  args: {
    ariaLabelFromMonth: 'from month',
    ariaLabelFromTime: 'from time',
    ariaLabelToMonth: 'to month',
    ariaLabelToTime: 'to time',
    dateForMonth: new Date().getTime(),
    hasMillis: false,
    hasSeconds: true,
    hasTime: true,
    id: 'story-demo',
    onChange: (dates) => {
      console.log('new range ', new Date(dates.from), new Date(dates.to));
    },
    onChangePresetDate: (range) => {
      console.log('new preset ', range);
    },
    weekDays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
  },
};

export default meta;
type Story = StoryObj<typeof DateTimeRange>;

export const Base: Story = {
  render: () =>
    ((args) => {
      const [date, setDate] = React.useState({
        from: subDays(new Date(), 5).getTime(),
        to: new Date().getTime(),
      });

      const onChangeCallback = React.useCallback((range) => {
        console.log('new date', new Date(range.from), new Date(range.to));
        setDate(range);
      }, []);

      return (
        <DateTimeRange
          {...args}
          selectedDates={date}
          onChange={onChangeCallback}
        />
      );
    })(),
};

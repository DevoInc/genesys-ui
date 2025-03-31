import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { subDays, subMonths } from 'date-fns';

import { DateTimeRangeFloatingPicker } from './DateTimeRangeFloatingPicker';
import { getDefaultPresets } from '../Presets';
import { TDate } from '../../declarations';
import { formatDate, gt } from '../../helpers';
import { getDefaultParseDate } from '../../parsers';

const now = new Date().getTime();
const presets = getDefaultPresets(now);
const meta: Meta<typeof DateTimeRangeFloatingPicker> = {
  title: 'Components/Datetime/DateTimeRangeFloatingPicker',
  component: DateTimeRangeFloatingPicker,
  argTypes: {
    helper: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    id: 'story-demo',
    size: 'md',
    presets,
  },
};

export default meta;
type Story = StoryObj<typeof DateTimeRangeFloatingPicker>;

export const Playground: Story = {
  args: {
    value: [subMonths(new Date(), 1).getTime(), new Date().getTime()],
    realTime: 'inactive',
    floatingHelperTooltip: 'Show the hel messages',
  },
  render: (args) =>
    ((props) => {
      const [value, setValue] = React.useState(props.value);
      const [realTime, setRealTime] = React.useState(props.realTime);
      return (
        <DateTimeRangeFloatingPicker
          {...props}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          realTime={realTime}
          onRealTimeClick={(event) => {
            event.stopPropagation();
            setRealTime((oldRealTime) =>
              oldRealTime === 'inactive' ? 'activated' : 'inactive',
            );
          }}
        />
      );
    })(args),
};

const customTimeLanguagePresets = [
  { label: 'Relative to' },
  { value: ['now() - 30s', 'now()'], label: 'Last 30 seconds' },
  { value: ['now() - 1m', 'now()'], label: 'Last minute' },
  { value: ['now() - 5m', 'now()'], label: 'Last 5 minutes' },
  { value: ['now() - 10m', 'now()'], label: 'Last 10 minutes' },
  { value: ['now() - 15m', 'now()'], label: 'Last 15 minutes' },
  { value: ['now() - 30m', 'now()'], label: 'Last 30 minutes' },
  { value: ['now() - 45m', 'now()'], label: 'Last 45 minutes' },
  { value: ['now() - 1h', 'now()'], label: 'Last hour' },
  { value: ['now() - 3h', 'now()'], label: 'Last 3 hours' },
  { value: ['now() - 6h', 'now()'], label: 'Last 6 hours' },
  { value: ['now() - 12h', 'now()'], label: 'Last 12 hours' },
  { value: ['now() - 1d', 'now()'], label: 'Last 1 day' },
  { value: ['now() - 2d', 'now()'], label: 'Last 2 days' },
  { value: ['now() - 7d', 'now()'], label: 'Last 7 days' },
  { value: ['now() - 15d', 'now()'], label: 'Last 15 days' },
  { value: ['now() - 30d', 'now()'], label: 'Last month' },
  { value: ['now() - 60d', 'now()'], label: 'Last 2 months' },
  { value: ['now() - 90d', 'now()'], label: 'Last 3 months' },
  { value: ['now() - 180d', 'now()'], label: 'Last 6 months' },
  { value: ['now() - 365d', 'now()'], label: 'Last year' },
  { label: 'Snap to' },
  { value: ['now() @ 1m', 'now()'], label: 'Minute' },
  { value: ['now() @ 1h', 'now()'], label: 'Hour' },
  { value: ['now() @ 1d', 'now()'], label: 'Day' },
  { value: ['now() @ 1W', 'now()'], label: 'ISO week' },
  { value: ['now() @ 1w', 'now()'], label: 'Week' },
  { value: ['now() @ 1M', 'now()'], label: 'Month' },
  { value: ['now() @ 1y', 'now()'], label: 'Year' },
];

export const CustomTimeLanguage: Story = {
  tags: ['isHidden'],
  args: {
    value: ['now() - 5m', 'now()'],
    presets: customTimeLanguagePresets,
    parseDate: (date: TDate) => {
      if (typeof date === 'string') {
        const result = getDefaultParseDate()(date);
        if (result.isValid) {
          return result;
        }
      }
      return {
        isValid: true,
        value: date,
        errors: [],
      };
    },
    parseRange: (range) => ({ isValid: true, value: range, errors: [] }),
    formatDate: (date: TDate) => {
      if (typeof date === 'string') {
        return date;
      }
      return formatDate(date);
    },
  },
  render: (args) =>
    ((props) => {
      const [value, setValue] = React.useState(props.value);
      return (
        <DateTimeRangeFloatingPicker
          {...props}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
      );
    })(args),
};

export const Limits: Story = {
  tags: ['isHidden'],
  args: {
    value: [subDays(new Date(), 1).getTime(), new Date().getTime()],
    parseDate: (date) => {
      const result = getDefaultParseDate()(date);
      if (result.isValid) {
        const isFuture = gt(date, new Date().getTime() + 1000);
        if (isFuture) {
          return {
            isValid: false,
            value: date,
            errors: ["Date can't be on the future."],
          };
        }
      }
      return result;
    },
  },
  render: (args) =>
    ((props) => {
      const [value, setValue] = React.useState(props.value);
      return (
        <DateTimeRangeFloatingPicker
          {...props}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
      );
    })(args),
};

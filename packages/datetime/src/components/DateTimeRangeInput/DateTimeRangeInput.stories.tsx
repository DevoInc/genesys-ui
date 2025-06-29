import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { DateTimeRangeInput } from './DateTimeRangeInput';
import { useDateTimeRangeInputValidation } from './hooks';
import { formatDate } from '../../helpers';
import { getDefaultParseDate, getDefaultParseRange } from '../../parsers';
import { TDateRange } from '../../declarations';

const meta: Meta<typeof DateTimeRangeInput> = {
  title: 'Components/Datetime/DateTimeRangeInput',
  component: DateTimeRangeInput,
  args: {
    ariaLabel: ['from', 'to'],
    onClick: () => {
      // eslint-disable-next-line no-console
      console.log('input clicked');
    },
    onChange: () => {
      // eslint-disable-next-line no-console
      console.log('input changed');
    },
    onRealTimeClick: () => {
      // eslint-disable-next-line no-console
      console.log('RT button clicked');
    },
    id: 'story-demo',
    isOpen: false,
    realTime: 'hidden',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof DateTimeRangeInput>;

export const Playground: Story = {
  render: (args) =>
    ((props) => {
      const [value, setValue] = React.useState<(string | number | Date)[]>([
        new Date().getTime() - 60 * 60 * 1000,
        new Date().getTime(),
      ]);

      const { inputValue, inputOnChange, errors } =
        useDateTimeRangeInputValidation({
          value,
          onChange: setValue,
          reprDate: (ts: number) => formatDate()(ts),
          parseDate: getDefaultParseDate(),
          parseRange: getDefaultParseRange(),
        });

      return (
        <DateTimeRangeInput
          {...props}
          value={inputValue}
          onChange={inputOnChange}
          statuses={errors.map((e) => (e.length > 0 ? 'error' : 'base'))}
          helpers={errors.map((e) => (e.length > 0 ? e[0] : null))}
        />
      );
    })(args),
  args: {
    label: '',
  },
};

export const RangeValidation: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => {
      const [value, setValue] = React.useState<TDateRange>([
        new Date().getTime() - 3600000,
        new Date().getTime(),
      ]);

      const { inputValue, inputOnChange, errors, rangeErrors } =
        useDateTimeRangeInputValidation({
          value,
          onChange: setValue,
          reprDate: (ts: number) => formatDate()(ts),
          parseDate: getDefaultParseDate(),
          parseRange: getDefaultParseRange(),
        });

      return (
        <DateTimeRangeInput
          {...props}
          value={inputValue}
          onChange={inputOnChange}
          statuses={errors.map((e) => (e.length > 0 ? 'error' : 'base'))}
          helpers={errors.map((e) => (e.length > 0 ? e[0] : null))}
          status={rangeErrors.length > 0 ? 'error' : 'base'}
          helper={rangeErrors.length > 0 ? rangeErrors[0] : null}
        />
      );
    })(args),
  args: {
    label: 'My DateTimeRange',
  },
};

export const UsingExpressions: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => {
      const [value, setValue] = React.useState(props.value);

      return (
        <DateTimeRangeInput
          {...props}
          value={value}
          onChange={(index: number, newValue: string) => {
            const newRange = [...value];
            newRange[index] = newValue;
            setValue(newRange);
          }}
          status={value.every((val) => val.includes('now')) ? 'base' : 'error'}
        />
      );
    })(args),
  args: {
    value: ['15m - now()', 'now()'],
  },
};

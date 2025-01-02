import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { DateTimeRangeInput } from './DateTimeRangeInput';
import { useDateTimeRangeInputValidation } from './hooks';
import { formatDate, validateRange } from '../../helpers';
import { parseStrDate } from '../../parsers';

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
          reprDate: (ts: number) => formatDate(ts),
          parseDate: parseStrDate,
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
      const [value, setValue] = React.useState([
        new Date().getTime() - 3600000,
        new Date().getTime(),
      ]);

      const { inputValue, inputOnChange, errors } =
        useDateTimeRangeInputValidation({
          value,
          onChange: setValue,
          reprDate: (ts: number) => formatDate(ts),
          parseDate: parseStrDate,
        });

      const isValidRange = validateRange(value);

      return (
        <DateTimeRangeInput
          {...props}
          value={inputValue}
          onChange={inputOnChange}
          statuses={errors.map((e) => (e.length > 0 ? 'error' : 'base'))}
          helpers={errors.map((e) => (e.length > 0 ? e[0] : null))}
          status={isValidRange ? 'base' : 'error'}
          helper={isValidRange ? null : 'Invalid range'}
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
          // onBlur={onBlurCallback}
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
    // parseExpression: (exp: string) => {
    //   if (exp.includes('now')) {
    //     return {
    //       isValid: true,
    //       value: new Date().getTime(),
    //       errors: [],
    //     };
    //   } else {
    //     return {
    //       isValid: false,
    //       value: null,
    //       errors: ['Invalid expression'],
    //     };
    //   }
    // },
  },
};

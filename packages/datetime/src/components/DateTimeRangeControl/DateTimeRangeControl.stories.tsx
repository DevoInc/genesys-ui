import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { DateTimeRangeControl } from './DateTimeRangeControl';

const meta: Meta<typeof DateTimeRangeControl> = {
  title: 'Components/Datetime/DateTimeRangeControl',
  component: DateTimeRangeControl,
  args: {
    ariaLabelFrom: 'from',
    ariaLabelTo: 'to',
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
type Story = StoryObj<typeof DateTimeRangeControl>;

export const Base: Story = {
  render: (args) =>
    ((props) => {
      const [from, setFrom] = React.useState(props.from);
      const [to, setTo] = React.useState(props.to);

      const onChangeCallback = React.useCallback(
        (range: {
          from: { value: number; str: string };
          to: { value: number; str: string };
        }) => {
          setFrom(range.from.value);
          setTo(range.to.value);
        },
        [],
      );

      return (
        <DateTimeRangeControl
          {...props}
          from={from}
          to={to}
          onChange={onChangeCallback}
        />
      );
    })(args),
  args: {
    from: new Date().getTime() - 3600000,
    to: new Date().getTime(),
    label: 'My DateTimeRange',
  },
};

export const RangeValidation: Story = {
  render: (args) =>
    ((props) => {
      const [from, setFrom] = React.useState(props.from);
      const [to, setTo] = React.useState(props.to);
      const [statusFrom, setStatusFrom] = React.useState(props.statusFrom);
      const [statusTo, setStatusTo] = React.useState(props.statusTo);
      const [helperFrom, setHelperFrom] = React.useState(props.helperFrom);
      const [helperTo, setHelperTo] = React.useState(props.helperTo);

      const onChangeCallback = React.useCallback(
        (range: {
          from: { value: number; str: string };
          to: { value: number; str: string };
        }) => {
          console.log('RANGE', range);
          if (range.to.value <= range.from.value) {
            setStatusTo('error');
            setHelperTo('Date to must be bigger');
            setStatusFrom('base');
            setHelperFrom('');
          } else if (
            range.from.value <
            new Date().getTime() - 10 * 24 * 3600000
          ) {
            setStatusTo('base');
            setHelperTo('');
            setStatusFrom('error');
            setHelperFrom('From datetime is too early');
          } else {
            setStatusFrom('base');
            setStatusTo('base');
            setHelperFrom('');
            setHelperTo('');
          }
          setFrom(range.from.value);
          setTo(range.to.value);
        },
        [],
      );

      return (
        <DateTimeRangeControl
          {...props}
          from={from}
          to={to}
          onChange={onChangeCallback}
          statusFrom={statusFrom}
          statusTo={statusTo}
          helperFrom={helperFrom}
          helperTo={helperTo}
        />
      );
    })(args),
  args: {
    from: new Date().getTime() - 3600000,
    to: new Date().getTime(),
    label: 'My DateTimeRange',
  },
};

export const UsingExpressions: Story = {
  render: (args) =>
    ((props) => {
      const [from, setFrom] = React.useState(props.from);
      const [to, setTo] = React.useState(props.to);

      const onChangeCallback = React.useCallback(
        (range: {
          from: { value: number; str: string };
          to: { value: number; str: string };
        }) => {
          console.log('cambiado', range);
          if (range.from.str.includes('now') || range.to.str.includes('now')) {
            setFrom(range.from.str);
            setTo(range.to.str);
          } else {
            setFrom(range.from.value);
            setTo(range.to.value);
          }
        },
        [],
      );

      return (
        <DateTimeRangeControl
          {...props}
          from={from}
          to={to}
          // onBlur={onBlurCallback}
          onChange={onChangeCallback}
        />
      );
    })(args),
  args: {
    from: '15m - now()',
    to: 'now()',
    parseExpression: (exp: string) => {
      if (exp.includes('now')) {
        return {
          isValid: true,
          value: new Date().getTime(),
          errors: [],
        };
      } else {
        return {
          isValid: false,
          value: null,
          errors: ['Invalid expression'],
        };
      }
    },
  },
};

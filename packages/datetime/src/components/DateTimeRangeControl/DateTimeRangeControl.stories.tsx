import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { DateTimeRangeControl } from './DateTimeRangeControl';
import type { DateRange } from '../declarations';

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

      const onBlurCallback = React.useCallback((range: DateRange) => {
        setFrom(range.from);
        setTo(range.to);
      }, []);

      const onChangeCallback = React.useCallback((range: DateRange) => {
        setFrom(range.from);
        setTo(range.to);
      }, []);

      return (
        <DateTimeRangeControl
          {...props}
          from={from}
          to={to}
          onBlur={onBlurCallback}
          onChange={onChangeCallback}
        />
      );
    })(args),
  args: {
    from: '15m - now()',
    to: 'now()',
  },
};

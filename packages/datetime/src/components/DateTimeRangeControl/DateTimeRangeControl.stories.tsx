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
      console.log('input clicked');
    },
    onChange: () => {
      console.log('input changed');
    },
    onRealTimeClick: () => {
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
    ((args) => {
      const [from, setFrom] = React.useState(args.from);
      const [to, setTo] = React.useState(args.to);

      const onBlurCallback = React.useCallback((range) => {
        setFrom(range.from);
        setTo(range.to);
      }, []);

      const onChangeCallback = React.useCallback((range) => {
        setFrom(range.from);
        setTo(range.to);
      }, []);

      return (
        <DateTimeRangeControl
          {...args}
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

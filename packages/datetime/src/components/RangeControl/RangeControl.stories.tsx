import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { RangeControl } from './RangeControl';

const meta: Meta<typeof RangeControl> = {
  title: 'Components/Datetime/RangeControl',
  component: RangeControl,
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
    realTime: 'hidden',
    isOpen: false,
    size: 'md',
    statusFrom: 'error',
    helperFrom: 'This is an invalid format for the date',
    statusTo: 'base',
  },
};

export default meta;
type Story = StoryObj<typeof RangeControl>;

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
        <RangeControl
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

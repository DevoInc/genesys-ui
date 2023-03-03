import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { RangeInput } from './RangeInput';

const meta: Meta<typeof RangeInput> = {
  title: 'Components/Datetime/RangeInput',
  component: RangeInput,
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
    withShift: false,
    isOpen: false,
    statusFrom: 'base',
    statusTo: 'base',
  },
};

export default meta;
type Story = StoryObj<typeof RangeInput>;

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
        <RangeInput
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

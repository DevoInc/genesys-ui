import { Meta, StoryObj } from '@storybook/react';

import { SwitchControl } from '..';
import * as React from 'react';

const meta: Meta<typeof SwitchControl> = {
  title: 'Components/Form/SwitchControl',
  component: SwitchControl,
  args: {
    'aria-label': 'Story label',
    size: 'md',
    autoFocus: true,
    status: 'base',
    checkedContent: 'OR',
    uncheckedContent: 'AND',
  },
  argTypes: {
    'aria-label': {
      type: { required: true } as never,
    },
  },
};

export default meta;
type Story = StoryObj<typeof SwitchControl>;

export const Base: Story = {
  render: (args) =>
    ((args) => {
      const [checked, setChecked] = React.useState(false);
      return (
        <SwitchControl
          {...args}
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
      );
    })(args),
};

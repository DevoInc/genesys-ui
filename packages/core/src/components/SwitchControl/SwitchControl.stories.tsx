import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { SwitchControl } from './SwitchControl';

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
    ((props) => {
      const [checked, setChecked] = React.useState(false);
      return (
        <SwitchControl
          {...props}
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
      );
    })(args),
};

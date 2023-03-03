import { Meta, StoryObj } from '@storybook/react';

import { SwitchControl } from '..';

const meta: Meta<typeof SwitchControl> = {
  title: 'Components/Core/Form/SwitchControl',
  component: SwitchControl,
  args: {
    size: 'md',
    status: 'base',
  },
  argTypes: {
    'aria-label': {
      type: { required: true } as never,
    },
  },
};

export default meta;
type Story = StoryObj<typeof SwitchControl>;

export const Base: Story = {};

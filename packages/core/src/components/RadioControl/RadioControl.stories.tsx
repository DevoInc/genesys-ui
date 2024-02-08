import { Meta, StoryObj } from '@storybook/react';

import { RadioControl } from '..';

const meta: Meta<typeof RadioControl> = {
  title: 'Components/Form/RadioControl',
  component: RadioControl,
  args: {
    'aria-label': 'Radio label',
    status: 'base',
    size: 'md',
  },
  argTypes: {
    'aria-label': {
      type: { required: true } as never,
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioControl>;

export const Base: Story = {};

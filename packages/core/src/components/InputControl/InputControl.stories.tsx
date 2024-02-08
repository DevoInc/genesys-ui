import { Meta, StoryObj } from '@storybook/react';

import { InputControl } from '..';

const meta: Meta<typeof InputControl> = {
  title: 'Components/Form/InputControl',
  component: InputControl,
  args: {
    size: 'md',
    status: 'base',
    type: 'text',
  },
  argTypes: {
    addonToLeft: { control: { type: 'text' } },
    addonToRight: { control: { type: 'text' } },
    // because the storybook doesn't recognize the WithRequired utility
    'aria-label': {
      type: { required: true } as never,
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputControl>;

export const Base: Story = {};

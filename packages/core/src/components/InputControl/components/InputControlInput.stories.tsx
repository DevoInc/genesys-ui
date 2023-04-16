import { Meta, StoryObj } from '@storybook/react';

import { InputControlInput } from '.';

const meta: Meta<typeof InputControlInput> = {
  title: 'Components/Core/Form/InputControlInput',
  component: InputControlInput,
  args: { size: 'md', status: 'base', type: 'text' },
  argTypes: {
    // because the storybook doesn't recognize the WithRequired utility
    'aria-label': {
      type: { required: true } as never,
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputControlInput>;

export const Base: Story = {};

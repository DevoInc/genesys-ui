import { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Form/Checkbox',
  component: Checkbox,
  args: {
    // Meant for the story
    id: 'checkbox-id',
    label: 'Checkbox label',
    // Default
    size: 'md',
    status: 'base',
  },
  argTypes: {
    helper: {
      control: {
        type: 'text',
      },
    },
    // because the storybook doesn't recognize the WithRequired utility
    id: {
      type: { required: true } as never,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Base: Story = {};

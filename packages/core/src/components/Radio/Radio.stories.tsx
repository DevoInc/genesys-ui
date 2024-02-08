import { Meta, StoryObj } from '@storybook/react';

import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/Form/Radio',
  component: Radio,
  args: {
    // Meant for the story
    id: 'checkbox-id',
    label: 'Label for story',
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
type Story = StoryObj<typeof Radio>;

export const Base: Story = {};

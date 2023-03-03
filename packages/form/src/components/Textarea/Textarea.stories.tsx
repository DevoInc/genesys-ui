import { Meta, StoryObj } from '@storybook/react';

import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Form/Textarea',
  component: Textarea,
  args: {
    // Default
    hasWideControl: true,
    labelPosition: 'top',
    size: 'md',
    status: 'base',
    // Meant for the story
    id: 'textarea-id',
    label: 'Label for story',
    placeholder: 'Placeholder...',
    rows: 4,
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
type Story = StoryObj<typeof Textarea>;

export const Base: Story = {};

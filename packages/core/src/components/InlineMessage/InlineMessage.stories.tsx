import { Meta, StoryObj } from '@storybook/react';

import { InlineMessage } from '..';

const meta: Meta<typeof InlineMessage> = {
  title: 'Components/Core/Feedback/InlineMessage',
  component: InlineMessage,
  args: {
    placement: 'right',
    state: 'enabled',
    status: 'help',
    id: 'inline-message',
  },
  argTypes: {
    // because the storybook doesn't recognize the WithRequired utility
    id: {
      type: { required: true } as any,
    },
  },
};

export default meta;
type Story = StoryObj<typeof InlineMessage>;

export const Base: Story = {
  args: { children: 'Hi!' },
};

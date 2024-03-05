import * as React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { InlineMessage, Typography } from '..';

const meta: Meta<typeof InlineMessage> = {
  title: 'Components/Feedback/InlineMessage',
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
  parameters: {
    layout: 'centered',
  },
  args: {
    children: (
      <InlineMessage.Panel>
        <Typography.Paragraph>This is an inline message</Typography.Paragraph>
      </InlineMessage.Panel>
    ),
  },
};

import { Meta, StoryObj } from '@storybook/react';

import { BoxMessage } from '../';

const meta: Meta<typeof BoxMessage> = {
  title: 'Components/Core/Layout/BoxMessage',
  component: BoxMessage,
  args: {
    status: 'info',
    closeTooltip: 'Remove message',
  },
};

export default meta;
type Story = StoryObj<typeof BoxMessage>;

export const Base: Story = {
  args: {
    content: 'This is an example of BoxMessage component content',
    title: 'Title of BoxMessage',
  },
};

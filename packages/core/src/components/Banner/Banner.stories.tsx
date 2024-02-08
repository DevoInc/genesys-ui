import { Meta, StoryObj } from '@storybook/react';

import { Banner } from '../';

const meta: Meta<typeof Banner> = {
  title: 'Components/Feedback/Banner',
  component: Banner,
  args: {
    status: 'info',
    closeTooltip: 'Remove message',
    content: 'This is an example of Banner component content',
    title: 'Title of Banner',
  },
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const Base: Story = {};

import { Meta, StoryObj } from '@storybook/react';

import { Small } from './Small';

const meta: Meta<typeof Small> = {
  title: 'Components/Text/Typography/Inline',
  component: Small,
};

export default meta;
type Story = StoryObj<typeof Small>;

export const BaseSmall: Story = {
  tags: ['isHidden'],
  args: {
    children: 'Small text for big thoughts',
  },
};

import { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Core/Feedback/Badge',
  component: Badge,
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Base: Story = {
  args: {
    icon: 'gi-check_thick',
    size: 'md',
    text: '',
  },
};

import { Meta, StoryObj } from '@storybook/react';

import { Partitions } from '..';

const meta: Meta<typeof Partitions> = {
  title: 'Components/Feedback/Partitions',
  component: Partitions,
  args: {
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof Partitions>;

export const Base: Story = {
  args: {
    data: [
      { value: 0.4, color: '#D62433', tooltip: 'Error: 40%' },
      { value: 0.2, color: '#F7B94F', tooltip: 'Warning: 20%' },
      { value: 0.3, color: '#53BAED', tooltip: 'Help: 30%' },
      { value: 0.1, color: '#03855A', tooltip: 'Success: 10%' },
    ],
  },
};

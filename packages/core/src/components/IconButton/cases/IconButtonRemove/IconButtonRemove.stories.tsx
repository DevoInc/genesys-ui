import { Meta, StoryObj } from '@storybook/react';

import { IconButtonRemove } from './IconButtonRemove';

const meta: Meta<typeof IconButtonRemove> = {
  title: 'Components/Button/IconButtonRemove',
  component: IconButtonRemove,
  args: {
    state: 'enabled',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof IconButtonRemove>;

export const Base: Story = {};

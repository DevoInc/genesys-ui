import { Meta, StoryObj } from '@storybook/react';

import { IconButtonStatus } from '..';

const meta: Meta<typeof IconButtonStatus> = {
  title: 'Components/Core/Button/IconButtonStatus',
  component: IconButtonStatus,
  args: {
    state: 'enabled',
    size: 'md',
    colorScheme: 'help',
  },
};

export default meta;
type Story = StoryObj<typeof IconButtonStatus>;

export const Base: Story = {};

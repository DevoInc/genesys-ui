import { Meta, StoryObj } from '@storybook/react';

import { IconButton } from '../..';

const meta: Meta<typeof IconButton> = {
  title: 'Components/Core/Button/IconButton',
  component: IconButton,
  args: {
    colorScheme: 'neutral',
    state: 'enabled',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Base: Story = {
  args: { icon: 'gi-heart_full', title: 'Favourite' },
};

import { Meta, StoryObj } from '@storybook/react';

import { Chip } from '..';

const meta: Meta<typeof Chip> = {
  title: 'Components/Core/Form/Chip',
  component: Chip,
  args: {
    children: 'Favorite',
    icon: 'gi-like_heart_favorite_rating_love',
    iconSelected: 'gi-heart_full',
    selectionScheme: 'multiple',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Base: Story = {};

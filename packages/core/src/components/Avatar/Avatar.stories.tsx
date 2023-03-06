import { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '../';

const EXAMPLE_AVATAR_IMG = 'https://i.pravatar.cc/300';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Core/Media/Avatar',
  component: Avatar,
  args: {
    bordered: false,
    disabled: false,
    colorScheme: 'neutral',
    imageFit: 'cover',
    size: 'md',
    variant: 'circle',
    imageSrc: EXAMPLE_AVATAR_IMG,
    onClick: undefined,
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Base: Story = {};

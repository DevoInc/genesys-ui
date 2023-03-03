import { Meta, StoryObj } from '@storybook/react';

import { Tag } from '..';

const meta: Meta<typeof Tag> = {
  title: 'Components/Core/Feedback/Tag',
  component: Tag,
  args: {
    size: 'md',
    colorScheme: 'neutral',
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Base: Story = {
  args: {
    iconName: 'tag_price_sale',
    text: 'Category',
  },
};

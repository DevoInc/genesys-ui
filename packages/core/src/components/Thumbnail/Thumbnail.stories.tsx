import { Meta, StoryObj } from '@storybook/react';

import { Thumbnail } from '..';

const meta: Meta<typeof Thumbnail> = {
  title: 'Components/Core/Media/Thumbnail',
  component: Thumbnail,
};

export default meta;
type Story = StoryObj<typeof Thumbnail>;

export const Base: Story = {
  args: {
    img: 'https://picsum.photos/200/300',
  },
};

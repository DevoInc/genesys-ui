import { Meta, StoryObj } from '@storybook/react';

import { Typography } from '../../..';

const meta: Meta<typeof Typography.Italic> = {
  title: 'Components/Text/Typography/Inline',
  component: Typography.Italic,
};

export default meta;
type Story = StoryObj<typeof Typography.Italic>;

export const Italic: Story = {
  args: {
    children: 'A random caption',
  },
};

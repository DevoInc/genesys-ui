import { Meta, StoryObj } from '@storybook/react';

import { Typography } from '../../..';

const meta: Meta<typeof Typography.Deleted> = {
  title: 'Components/Text/Typography/Inline',
  component: Typography.Deleted,
};

export default meta;
type Story = StoryObj<typeof Typography.Deleted>;

export const Deleted: Story = {
  args: {
    children: 'Crossed-out text',
  },
};

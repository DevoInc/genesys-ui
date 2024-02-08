import { Meta, StoryObj } from '@storybook/react';

import { Typography } from '../../..';

const meta: Meta<typeof Typography.Strong> = {
  title: 'Components/Text/Typography/Inline',
  component: Typography.Strong,
};

export default meta;
type Story = StoryObj<typeof Typography.Strong>;

export const Strong: Story = {
  args: {
    children: 'Stronger than iron',
  },
};

import { Meta, StoryObj } from '@storybook/react';

import { Typography } from '../../..';

const meta: Meta<typeof Typography.Underlined> = {
  title: 'Components/Text/Typography/Inline',
  component: Typography.Underlined,
};

export default meta;
type Story = StoryObj<typeof Typography.Underlined>;

export const Underlined: Story = {
  args: {
    children: 'Underlined text',
  },
};

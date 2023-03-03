import { Meta, StoryObj } from '@storybook/react';

import { Typography } from '../../..';

const meta: Meta<typeof Typography.Highlighted> = {
  title: 'Components/Core/Text/Typography/Inline',
  component: Typography.Highlighted,
};

export default meta;
type Story = StoryObj<typeof Typography.Highlighted>;

export const Highlighted: Story = {
  args: {
    children: 'Important text',
  },
};

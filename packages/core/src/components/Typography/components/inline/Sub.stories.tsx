import { Meta, StoryObj } from '@storybook/react';

import { Typography } from '../../..';

const meta: Meta<typeof Typography.Sub> = {
  title: 'Components/Core/Text/Typography/Inline',
  component: Typography.Sub,
};

export default meta;
type Story = StoryObj<typeof Typography.Sub>;

export const Sub: Story = {
  args: {
    children: 'Sub text',
  },
};

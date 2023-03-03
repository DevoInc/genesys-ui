import { Meta, StoryObj } from '@storybook/react';

import { Typography } from '../../..';

const meta: Meta<typeof Typography.Sup> = {
  title: 'Components/Core/Text/Typography/Inline',
  component: Typography.Sup,
};

export default meta;
type Story = StoryObj<typeof Typography.Sup>;

export const Sup: Story = {
  args: {
    children: 'Sup text',
  },
};

import { Meta, StoryObj } from '@storybook/react';

import { Typography } from '../../..';

const meta: Meta<typeof Typography.Abbr> = {
  title: 'Components/Core/Text/Typography/Inline',
  component: Typography.Abbr,
};

export default meta;
type Story = StoryObj<typeof Typography.Abbr>;

export const Abbr: Story = {
  args: {
    children: 'HTML',
  },
};

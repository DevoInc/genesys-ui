import { Meta, StoryObj } from '@storybook/react';

import { Typography } from '../../..';

const meta: Meta<typeof Typography.Inserted> = {
  title: 'Components/Core/Text/Typography/Inline',
  component: Typography.Inserted,
};

export default meta;
type Story = StoryObj<typeof Typography.Inserted>;

export const Inserted: Story = {
  args: {
    children: 'Inserted text',
  },
};

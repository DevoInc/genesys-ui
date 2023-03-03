import { Meta, StoryObj } from '@storybook/react';

import { Typography } from '../../..';

const meta: Meta<typeof Typography.Small> = {
  title: 'Components/Core/Text/Typography/Inline',
  component: Typography.Small,
};

export default meta;
type Story = StoryObj<typeof Typography.Small>;

export const Small: Story = {
  args: {
    children: 'Small text for big thoughts',
  },
};

import { Meta, StoryObj } from '@storybook/react';

import { Typography } from '../../..';

const meta: Meta<typeof Typography.Heading> = {
  title: 'Components/Text/Typography/Block/Heading',
  component: Typography.Heading,
};

export default meta;
type Story = StoryObj<typeof Typography.Heading>;

export const Heading: Story = {
  args: {
    children: 'Heading',
  },
};

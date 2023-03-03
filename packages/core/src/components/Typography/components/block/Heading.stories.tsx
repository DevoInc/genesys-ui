import { Meta, StoryObj } from '@storybook/react';

import { Typography } from '../../..';

const meta: Meta<typeof Typography.Heading> = {
  title: 'Components/Core/Text/Typography/Block',
  component: Typography.Heading,
};

export default meta;
type Story = StoryObj<typeof Typography.Heading>;

export const Heading: Story = {
  args: {
    children: 'Heading',
  },
};

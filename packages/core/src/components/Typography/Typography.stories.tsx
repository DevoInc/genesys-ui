import { Meta, StoryObj } from '@storybook/react';

import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Components/Text/Typography',
  component: Typography,
  args: {
    colorScheme: 'base',
    format: 'body-md',
    textAlign: 'left',
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Base: Story = {
  args: {
    children: 'Typography example',
  },
};

import { Meta, StoryObj } from '@storybook/react-vite';

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

export const Playground: Story = {
  args: {
    children: 'Typography example',
  },
};

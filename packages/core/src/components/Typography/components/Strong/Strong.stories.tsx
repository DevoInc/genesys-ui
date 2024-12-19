import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Strong } from './Strong';
import { Typography } from '../../Typography';

const meta: Meta<typeof Strong> = {
  title: 'Components/Text/Typography/Components/Inline/Strong',
  component: Strong,
  args: {
    children: 'Stronger than iron',
  },
};

export default meta;
type Story = StoryObj<typeof Strong>;

export const Playground: Story = {};

export const AsChildren: Story = {
  tags: ['isHidden'],
  render: () => (
    <Typography.Paragraph>
      This is a <Typography.Strong>strong content</Typography.Strong>
    </Typography.Paragraph>
  ),
};

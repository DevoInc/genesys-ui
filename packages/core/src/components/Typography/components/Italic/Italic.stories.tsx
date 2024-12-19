import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Italic } from './Italic';
import { Typography } from '../../Typography';

const meta: Meta<typeof Italic> = {
  title: 'Components/Text/Typography/Components/Inline/Italic',
  component: Italic,
  args: {
    children: 'A random caption',
  },
};

export default meta;
type Story = StoryObj<typeof Italic>;

export const Playground: Story = {};

export const AsChildren: Story = {
  tags: ['isHidden'],
  render: () => (
    <Typography.Paragraph>
      This is a book of <Typography.Italic>'Rick Sanchez'</Typography.Italic>
    </Typography.Paragraph>
  ),
};

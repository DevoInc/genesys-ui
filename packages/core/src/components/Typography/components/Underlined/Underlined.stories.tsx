import { Meta, StoryObj } from '@storybook/react';

import { Underlined } from './Underlined';
import { Typography } from '../../Typography';
import * as React from 'react';

const meta: Meta<typeof Underlined> = {
  title: 'Components/Text/Typography/Components/Inline/Underlined',
  component: Underlined,
  args: {
    children: 'Underlined text',
  },
};

export default meta;
type Story = StoryObj<typeof Underlined>;

export const Playground: Story = {};

export const AsChildren: Story = {
  tags: ['isHidden'],
  render: () => (
    <Typography.Paragraph>
      This is <Typography.Underlined>underlined content</Typography.Underlined>
    </Typography.Paragraph>
  ),
};

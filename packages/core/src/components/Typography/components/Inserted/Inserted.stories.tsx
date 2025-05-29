import { Meta, StoryObj } from '@storybook/react-vite';

import { Inserted } from './Inserted';
import { Typography } from '../../Typography';
import * as React from 'react';

const meta: Meta<typeof Inserted> = {
  title: 'Components/Text/Typography/Components/Inline/Inserted',
  component: Inserted,
  args: {
    children: 'Inserted text',
  },
};

export default meta;
type Story = StoryObj<typeof Inserted>;

export const Playground: Story = {};

export const AsChildren: Story = {
  tags: ['isHidden'],
  render: () => (
    <Typography.Paragraph>
      This is a <Typography.Inserted>new inserted content</Typography.Inserted>
    </Typography.Paragraph>
  ),
};

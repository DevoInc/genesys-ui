import { Meta, StoryObj } from '@storybook/react-vite';

import { Deleted } from './Deleted';
import { Typography } from '../../Typography';
import * as React from 'react';

const meta: Meta<typeof Deleted> = {
  title: 'Components/Text/Typography/Components/Inline/Deleted',
  component: Deleted,
  args: {
    children: 'Crossed-out text',
  },
};

export default meta;
type Story = StoryObj<typeof Deleted>;

export const Playground: Story = {};

export const AsChildren: Story = {
  tags: ['isHidden'],
  render: () => (
    <Typography.Paragraph>
      This is your <Typography.Deleted>deleted content</Typography.Deleted>
    </Typography.Paragraph>
  ),
};

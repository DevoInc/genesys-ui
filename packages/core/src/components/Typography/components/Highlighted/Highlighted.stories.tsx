import { Meta, StoryObj } from '@storybook/react-vite';

import { Highlighted } from './Highlighted';
import { Typography } from '../../Typography';
import * as React from 'react';

const meta: Meta<typeof Highlighted> = {
  title: 'Components/Text/Typography/Components/Inline/Highlighted',
  component: Highlighted,
  args: {
    children: 'Important text',
  },
};

export default meta;
type Story = StoryObj<typeof Highlighted>;

export const Playground: Story = {};

export const AsChildren: Story = {
  tags: ['isHidden'],
  render: () => (
    <Typography.Paragraph>
      This is your{' '}
      <Typography.Highlighted>selected content</Typography.Highlighted>
    </Typography.Paragraph>
  ),
};

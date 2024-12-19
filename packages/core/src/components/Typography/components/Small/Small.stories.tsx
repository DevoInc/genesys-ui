import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Small } from './Small';
import { Typography } from '../../Typography';

const meta: Meta<typeof Small> = {
  title: 'Components/Text/Typography/Components/Inline/Small',
  component: Small,
  args: {
    children: 'Small text for big thoughts',
  },
};

export default meta;
type Story = StoryObj<typeof Small>;

export const Playground: Story = {};

export const AsChildren: Story = {
  tags: ['isHidden'],
  render: () => (
    <Typography.Paragraph>
      This is your <Typography.Small>small content</Typography.Small>
    </Typography.Paragraph>
  ),
};

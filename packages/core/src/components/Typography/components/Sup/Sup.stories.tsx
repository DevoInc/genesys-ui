import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Sup } from './Sup';
import { Typography } from '../../Typography';

const meta: Meta<typeof Sup> = {
  title: 'Components/Text/Typography/Components/Inline/Sup',
  component: Sup,
  args: {
    children: 'Sup text',
  },
};

export default meta;
type Story = StoryObj<typeof Sup>;

export const Playground: Story = {};

export const AsChildren: Story = {
  tags: ['isHidden'],
  render: () => (
    <Typography.Paragraph>
      This is a <Typography.Sup>sup content</Typography.Sup>
    </Typography.Paragraph>
  ),
};

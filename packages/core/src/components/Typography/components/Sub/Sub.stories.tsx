import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { Sub } from './Sub';
import { Typography } from '../../Typography';

const meta: Meta<typeof Sub> = {
  title: 'Components/Text/Typography/Components/Inline/Sub',
  component: Sub,
  args: {
    children: 'Sub text',
  },
};

export default meta;
type Story = StoryObj<typeof Sub>;

export const Playground: Story = {};

export const AsChildren: Story = {
  tags: ['isHidden'],
  render: () => (
    <Typography.Paragraph>
      This is a <Typography.Sub>sub content</Typography.Sub>
    </Typography.Paragraph>
  ),
};

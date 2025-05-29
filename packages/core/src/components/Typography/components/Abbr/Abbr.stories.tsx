import { Meta, StoryObj } from '@storybook/react-vite';

import { Abbr } from './Abbr';
import { Typography } from '../../Typography';
import * as React from 'react';

const meta: Meta<typeof Abbr> = {
  title: 'Components/Text/Typography/Components/Inline/Abbr',
  component: Abbr,
  args: {
    children: 'HTML',
  },
};

export default meta;
type Story = StoryObj<typeof Abbr>;

export const Playground: Story = {};

export const WithTooltip: Story = {
  tags: ['isHidden'],
  args: {
    tooltip: 'HyperText Markup Language',
  },
};

export const AsChildren: Story = {
  tags: ['isHidden'],
  render: () => (
    <Typography.Paragraph>
      This is your <Typography.Abbr>ACRONYM</Typography.Abbr>
    </Typography.Paragraph>
  ),
};

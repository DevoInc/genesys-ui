import { Meta, StoryObj } from '@storybook/react-vite';

import { CodeInline } from './CodeInline';
import { Typography } from '../../Typography';
import * as React from 'react';

const meta: Meta<typeof CodeInline> = {
  title: 'Components/Text/Typography/Components/Inline/CodeInline',
  component: CodeInline,
  args: {
    children: 'const test = true',
  },
};

export default meta;
type Story = StoryObj<typeof CodeInline>;

export const Playground: Story = {};

export const AsChildren: Story = {
  tags: ['isHidden'],
  render: () => (
    <Typography.Paragraph>
      This is your <Typography.CodeInline>code content</Typography.CodeInline>
    </Typography.Paragraph>
  ),
};

import { Meta, StoryObj } from '@storybook/react';

import { Lead } from './Lead';
import * as React from 'react';
import { Typography } from '../../Typography';

const meta: Meta<typeof Lead> = {
  title: 'Components/Text/Typography/Components/Block/Lead',
  component: Lead,
  args: {
    children: 'This is the Lead content',
  },
};

export default meta;
type Story = StoryObj<typeof Lead>;

export const Playground: Story = {};

export const AsSubtitle: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((props) => (
      <>
        <Typography.Heading gutterBottom="cmp-xs" size="h3">
          This is a Heading
        </Typography.Heading>
        <Typography.Lead {...props}>
          This is a Lead component as a subtitle
        </Typography.Lead>
      </>
    ))(args),
};

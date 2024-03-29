import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Box } from './Box';
import { StyledLayoutContentHelper } from '../../../stories/components/styled';

const meta: Meta<typeof Box> = {
  title: 'Components/Layout/Box',
  component: Box,
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Base: Story = {
  args: {
    children: (
      <StyledLayoutContentHelper>Box content</StyledLayoutContentHelper>
    ),
  },
};

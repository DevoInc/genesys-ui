import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { FlexItem } from '..';
import { StyledLayoutContentHelper } from '../../../stories/components/styled';

const meta: Meta<typeof FlexItem> = {
  title: 'Components/Core/Layout/Flex/FlexItem',
  component: FlexItem,
};

export default meta;
type Story = StoryObj<typeof FlexItem>;

export const Base: Story = {
  args: {
    children: (
      <StyledLayoutContentHelper>FlexItem content</StyledLayoutContentHelper>
    ),
  },
};

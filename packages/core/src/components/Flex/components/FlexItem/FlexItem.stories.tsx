import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Flex } from '../../';
import { StyledLayoutContentHelper } from '../../../../../stories/components/styled';

const meta: Meta<typeof Flex.Item> = {
  title: 'Components/Layout/Flex/Flex/Components',
  component: Flex.Item,
};

export default meta;
type Story = StoryObj<typeof Flex.Item>;

export const Item: Story = {
  args: {
    children: (
      <StyledLayoutContentHelper>Flex.Item content</StyledLayoutContentHelper>
    ),
  },
};

import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { FlexItem } from '../../components';
import { StyledLayoutContentHelper } from '../../../../../stories/components/styled';
import { Flex } from '../../Flex';

const meta: Meta<typeof FlexItem> = {
  title: 'Components/Layout/Flex/Flex/Components',
  component: FlexItem,
};

export default meta;
type Story = StoryObj<typeof FlexItem>;

export const Item: Story = {
  render: (args) =>
    ((args) => (
      <Flex.Item {...args}>
        <StyledLayoutContentHelper>Flex.Item content</StyledLayoutContentHelper>
      </Flex.Item>
    ))(args),
};

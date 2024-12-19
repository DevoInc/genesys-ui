import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { FlexItem } from '../../components';
import { StyledLayoutContentHelper } from '../../../../../stories/components/styled';
import { Flex } from '../../Flex';

const meta: Meta<typeof FlexItem> = {
  title: 'Components/Layout/Flex/Components/FlexItem',
  component: FlexItem,
};

export default meta;
type Story = StoryObj<typeof FlexItem>;

export const Playground: Story = {
  render: (args) =>
    ((props) => (
      <Flex.Item {...props}>
        <StyledLayoutContentHelper>Flex.Item content</StyledLayoutContentHelper>
      </Flex.Item>
    ))(args),
};

import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { FlexItem } from '../../components';
import { Flex } from '../../Flex';
import { LayoutContentHelper } from '../../../../../stories/components';

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
        <LayoutContentHelper>Flex.Item content</LayoutContentHelper>
      </Flex.Item>
    ))(args),
};

import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { Flex } from './Flex';
import { LayoutContentHelper } from '../../../stories/components';

const meta: Meta<typeof Flex> = {
  title: 'Components/Layout/Flex',
  component: Flex,
  args: {
    gap: 'cmp-md',
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Playground: Story = {
  args: {
    children: (
      <>
        <LayoutContentHelper>1. Rogue from which.</LayoutContentHelper>
        <LayoutContentHelper>
          2. Rogue from which we spring.
        </LayoutContentHelper>
        <LayoutContentHelper>
          3. Rogue from which we spring galaxies.
        </LayoutContentHelper>
        <LayoutContentHelper>4. Rogue.</LayoutContentHelper>
      </>
    ),
  },
};

export const FlexAndFlexItems: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((args) => (
      <Flex {...args}>
        <Flex.Item flex={'1 1 50%'}>
          <LayoutContentHelper>1. Rogue from which.</LayoutContentHelper>
        </Flex.Item>
        <Flex.Item paddingLeft={'cmp-md'} flex={'1 1 25%'}>
          <LayoutContentHelper>
            2. Rogue from which we spring.
          </LayoutContentHelper>
        </Flex.Item>
        <Flex.Item paddingLeft={'cmp-md'} flex={'1 1 25%'}>
          <LayoutContentHelper>
            3. Rogue from which we spring galaxies.
          </LayoutContentHelper>
        </Flex.Item>
        <Flex.Item paddingLeft={'cmp-md'} flex={'0'} alignSelf={'flex-end'}>
          <LayoutContentHelper>4. Rogue.</LayoutContentHelper>
        </Flex.Item>
      </Flex>
    ))(args),
};

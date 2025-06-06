import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { Flex } from './Flex';
import { StyledLayoutContentHelper } from '../../../stories/components/styled';

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
        <StyledLayoutContentHelper>
          1. Rogue from which.
        </StyledLayoutContentHelper>
        <StyledLayoutContentHelper>
          2. Rogue from which we spring.
        </StyledLayoutContentHelper>
        <StyledLayoutContentHelper>
          3. Rogue from which we spring galaxies.
        </StyledLayoutContentHelper>
        <StyledLayoutContentHelper>4. Rogue.</StyledLayoutContentHelper>
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
          <StyledLayoutContentHelper>
            1. Rogue from which.
          </StyledLayoutContentHelper>
        </Flex.Item>
        <Flex.Item paddingLeft={'cmp-md'} flex={'1 1 25%'}>
          <StyledLayoutContentHelper>
            2. Rogue from which we spring.
          </StyledLayoutContentHelper>
        </Flex.Item>
        <Flex.Item paddingLeft={'cmp-md'} flex={'1 1 25%'}>
          <StyledLayoutContentHelper>
            3. Rogue from which we spring galaxies.
          </StyledLayoutContentHelper>
        </Flex.Item>
        <Flex.Item paddingLeft={'cmp-md'} flex={'0'} alignSelf={'flex-end'}>
          <StyledLayoutContentHelper>4. Rogue.</StyledLayoutContentHelper>
        </Flex.Item>
      </Flex>
    ))(args),
};

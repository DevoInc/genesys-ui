import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { FlexItem, Flex } from '../..';

const meta: Meta<typeof Flex> = {
  title: 'Components/Core/Layout/Flex/Flex',
  component: Flex,
  args: {
    gap: 'cmp-md',
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;

import { StyledLayoutContentHelper } from '../../../../stories/components/styled';

export const Base: Story = {
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
  render: () => (
    <Flex>
      <FlexItem flex={'1 1 50%'}>
        <StyledLayoutContentHelper>
          1. Rogue from which.
        </StyledLayoutContentHelper>
      </FlexItem>
      <FlexItem paddingLeft={'cmp-md'} flex={'1 1 25%'}>
        <StyledLayoutContentHelper>
          2. Rogue from which we spring.
        </StyledLayoutContentHelper>
      </FlexItem>
      <FlexItem paddingLeft={'cmp-md'} flex={'1 1 25%'}>
        <StyledLayoutContentHelper>
          3. Rogue from which we spring galaxies.
        </StyledLayoutContentHelper>
      </FlexItem>
      <FlexItem paddingLeft={'cmp-md'} flex={'0'} alignSelf={'flex-end'}>
        <StyledLayoutContentHelper>4. Rogue.</StyledLayoutContentHelper>
      </FlexItem>
    </Flex>
  ),
};

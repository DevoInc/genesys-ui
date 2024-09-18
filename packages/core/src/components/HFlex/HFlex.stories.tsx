import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Flex } from '../Flex';
import { HFlex } from './HFlex';
import { StyledLayoutContentHelper } from '../../../stories/components/styled';

const meta: Meta<typeof HFlex> = {
  title: 'Components/Layout/Flex/HFlex',
  component: HFlex,
  args: {
    alignItems: 'center',
    childrenFitFullWidth: false,
    inline: false,
    spacing: 'cmp-md',
  },
};

export default meta;
type Story = StoryObj<typeof HFlex>;

export const Base: Story = {
  args: {
    children: (
      <>
        <Flex.Item>
          <StyledLayoutContentHelper>1. HFlex item</StyledLayoutContentHelper>
        </Flex.Item>
        <Flex.Item>
          <StyledLayoutContentHelper>2. HFlex item</StyledLayoutContentHelper>
        </Flex.Item>
        <Flex.Item>
          <StyledLayoutContentHelper>3. HFlex item</StyledLayoutContentHelper>
        </Flex.Item>
        <Flex.Item>
          <StyledLayoutContentHelper>4. HFlex item</StyledLayoutContentHelper>
        </Flex.Item>
      </>
    ),
  },
};

export const HFlexAndHFlexItems: Story = {
  tags: ['isHidden'],
  name: 'Using HFlex.Item',
  render: (args) =>
    ((args) => (
      <HFlex {...args}>
        <HFlex.Item flex={'1 1 50%'}>
          <StyledLayoutContentHelper>
            1. Rogue from which.
          </StyledLayoutContentHelper>
        </HFlex.Item>
        <HFlex.Item paddingLeft={'cmp-md'} flex={'1 1 25%'}>
          <StyledLayoutContentHelper>
            2. Rogue from which we spring.
          </StyledLayoutContentHelper>
        </HFlex.Item>
        <HFlex.Item paddingLeft={'cmp-md'} flex={'1 1 25%'}>
          <StyledLayoutContentHelper>
            3. Rogue from which we spring galaxies.
          </StyledLayoutContentHelper>
        </HFlex.Item>
        <HFlex.Item paddingLeft={'cmp-md'} flex={'0'} alignSelf={'flex-end'}>
          <StyledLayoutContentHelper>4. Rogue.</StyledLayoutContentHelper>
        </HFlex.Item>
      </HFlex>
    ))(args),
};

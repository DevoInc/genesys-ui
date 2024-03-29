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

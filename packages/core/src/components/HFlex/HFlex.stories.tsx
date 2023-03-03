import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { FlexItem, HFlex } from '..';
import { StyledLayoutContentHelper } from '../../../stories/components/styled';

const meta: Meta<typeof HFlex> = {
  title: 'Components/Core/Layout/Flex/HFlex',
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
        <FlexItem>
          <StyledLayoutContentHelper>1. HFlex item</StyledLayoutContentHelper>
        </FlexItem>
        <FlexItem>
          <StyledLayoutContentHelper>2. HFlex item</StyledLayoutContentHelper>
        </FlexItem>
        <FlexItem>
          <StyledLayoutContentHelper>3. HFlex item</StyledLayoutContentHelper>
        </FlexItem>
        <FlexItem>
          <StyledLayoutContentHelper>4. HFlex item</StyledLayoutContentHelper>
        </FlexItem>
      </>
    ),
  },
};

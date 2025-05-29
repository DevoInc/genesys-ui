import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { VFlex } from './VFlex';
import { StyledLayoutContentHelper } from '../../../stories/components/styled';

const meta: Meta<typeof VFlex> = {
  title: 'Components/Layout/Flex/VFlex',
  component: VFlex,
  args: {
    alignItems: 'stretch',
    childrenFitFullHeight: false,
    inline: false,
    justifyContent: 'flex-start',
    spacing: 'cmp-md',
  },
};

export default meta;
type Story = StoryObj<typeof VFlex>;

export const Base: Story = {
  render: (args) =>
    ((args) => (
      <VFlex {...args}>
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
      </VFlex>
    ))(args),
};

export const VFlexAndVFlexItems: Story = {
  name: 'Using VFlex.Item',
  render: (args) =>
    ((args) => (
      <VFlex {...args}>
        <VFlex.Item>
          <StyledLayoutContentHelper>
            1. Rogue from which.
          </StyledLayoutContentHelper>
        </VFlex.Item>
        <VFlex.Item paddingTop={'cmp-xl'}>
          <StyledLayoutContentHelper>
            2. Rogue from which we spring.
          </StyledLayoutContentHelper>
        </VFlex.Item>
        <VFlex.Item width="50%">
          <StyledLayoutContentHelper>
            3. Rogue from which we spring galaxies.
          </StyledLayoutContentHelper>
        </VFlex.Item>
        <VFlex.Item flex={'0'} alignSelf={'flex-end'}>
          <StyledLayoutContentHelper>4. Rogue.</StyledLayoutContentHelper>
        </VFlex.Item>
      </VFlex>
    ))(args),
};

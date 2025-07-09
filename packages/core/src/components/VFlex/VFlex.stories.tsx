import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { VFlex } from './VFlex';
import { LayoutContentHelper } from '../../../stories/components';

const meta: Meta<typeof VFlex> = {
  title: 'Components/Layout/Flex/VFlex',
  component: VFlex,
  args: {
    childrenFitFullHeight: false,
    childrenFitFullWidth: true,
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
        <LayoutContentHelper>1. Rogue from which.</LayoutContentHelper>
        <LayoutContentHelper>
          2. Rogue from which we spring.
        </LayoutContentHelper>
        <LayoutContentHelper>
          3. Rogue from which we spring galaxies.
        </LayoutContentHelper>
        <LayoutContentHelper>4. Rogue.</LayoutContentHelper>
      </VFlex>
    ))(args),
};

export const VFlexAndVFlexItems: Story = {
  name: 'Using VFlex.Item',
  render: (args) =>
    ((args) => (
      <VFlex {...args}>
        <VFlex.Item>
          <LayoutContentHelper>1. Rogue from which.</LayoutContentHelper>
        </VFlex.Item>
        <VFlex.Item paddingTop={'cmp-xl'}>
          <LayoutContentHelper>
            2. Rogue from which we spring.
          </LayoutContentHelper>
        </VFlex.Item>
        <VFlex.Item width="50%">
          <LayoutContentHelper>
            3. Rogue from which we spring galaxies.
          </LayoutContentHelper>
        </VFlex.Item>
        <VFlex.Item flex={'0'} alignSelf={'flex-end'}>
          <LayoutContentHelper>4. Rogue.</LayoutContentHelper>
        </VFlex.Item>
      </VFlex>
    ))(args),
};

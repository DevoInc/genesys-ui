import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Flex } from '../Flex';
import { VFlex } from './VFlex';
import { StyledLayoutContentHelper } from '../../../stories/components/styled';

const meta: Meta<typeof VFlex> = {
  title: 'Components/Layout/Flex/VFlex',
  component: VFlex,
  args: {
    alignItems: 'flex-start',
    childrenFitFullWidth: true,
    childrenFitFullHeight: false,
    inline: false,
    justifyContent: 'flex-start',
    spacing: 'cmp-md',
  },
};

export default meta;
type Story = StoryObj<typeof VFlex>;

export const Base: Story = {
  args: {
    children: (
      <>
        <Flex.Item>
          <StyledLayoutContentHelper>
            1. Rogue from which.
          </StyledLayoutContentHelper>
        </Flex.Item>
        <Flex.Item>
          <StyledLayoutContentHelper>
            2. Rogue from which we spring.
          </StyledLayoutContentHelper>
        </Flex.Item>
        <Flex.Item>
          <StyledLayoutContentHelper>
            3. Rogue from which we spring galaxies.
          </StyledLayoutContentHelper>
        </Flex.Item>
        <Flex.Item>
          <StyledLayoutContentHelper>4. Rogue.</StyledLayoutContentHelper>
        </Flex.Item>
      </>
    ),
  },
};

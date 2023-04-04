import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Flex } from '../..';
import { StyledLayoutContentHelper } from '../../../../stories/components/styled';

const meta: Meta<typeof Flex> = {
  title: 'Components/Core/Layout/Flex/Flex',
  component: Flex,
  args: {
    gap: 'cmp-md',
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;

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

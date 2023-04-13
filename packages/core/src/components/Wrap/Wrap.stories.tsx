import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Flex, Wrap } from '..';
import { StyledLayoutContentHelper } from '../../../stories/components/styled';

const meta: Meta<typeof Wrap> = {
  title: 'Components/Core/Layout/Flex/Wrap',
  component: Wrap,
  args: {
    alignContent: 'flex-start',
    alignItems: 'center',
    hSpacing: 'cmp-md',
    inline: false,
    vSpacing: 'cmp-md',
  },
};

export default meta;
type Story = StoryObj<typeof Wrap>;

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
        <Flex.Item>
          <StyledLayoutContentHelper>
            5. Rogue from which we.
          </StyledLayoutContentHelper>
        </Flex.Item>
        <Flex.Item>
          <StyledLayoutContentHelper>6. Rogue from.</StyledLayoutContentHelper>
        </Flex.Item>
        <Flex.Item>
          <StyledLayoutContentHelper>
            7. Rogue from which we spring galaxies.
          </StyledLayoutContentHelper>
        </Flex.Item>
        <Flex.Item>
          <StyledLayoutContentHelper>
            8. Rogue from which we spring.
          </StyledLayoutContentHelper>
        </Flex.Item>
        <Flex.Item>
          <StyledLayoutContentHelper>
            9. Rogue from which we spring galaxies.
          </StyledLayoutContentHelper>
        </Flex.Item>
        <Flex.Item>
          <StyledLayoutContentHelper>10. Rogue.</StyledLayoutContentHelper>
        </Flex.Item>
        <Flex.Item>
          <StyledLayoutContentHelper>
            11. Rogue from which we.
          </StyledLayoutContentHelper>
        </Flex.Item>
        <Flex.Item>
          <StyledLayoutContentHelper>
            12. Rogue from which we.
          </StyledLayoutContentHelper>
        </Flex.Item>
        <Flex.Item>
          <StyledLayoutContentHelper>13. Rogue from.</StyledLayoutContentHelper>
        </Flex.Item>
        <Flex.Item>
          <StyledLayoutContentHelper>
            14. Rogue from which we spring galaxies.
          </StyledLayoutContentHelper>
        </Flex.Item>
        <Flex.Item>
          <StyledLayoutContentHelper>
            15. Rogue from which we spring.
          </StyledLayoutContentHelper>
        </Flex.Item>
      </>
    ),
  },
};

import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { FlexItem, Wrap } from '..';
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
        <FlexItem>
          <StyledLayoutContentHelper>
            1. Rogue from which.
          </StyledLayoutContentHelper>
        </FlexItem>
        <FlexItem>
          <StyledLayoutContentHelper>
            2. Rogue from which we spring.
          </StyledLayoutContentHelper>
        </FlexItem>
        <FlexItem>
          <StyledLayoutContentHelper>
            3. Rogue from which we spring galaxies.
          </StyledLayoutContentHelper>
        </FlexItem>
        <FlexItem>
          <StyledLayoutContentHelper>4. Rogue.</StyledLayoutContentHelper>
        </FlexItem>
        <FlexItem>
          <StyledLayoutContentHelper>
            5. Rogue from which we.
          </StyledLayoutContentHelper>
        </FlexItem>
        <FlexItem>
          <StyledLayoutContentHelper>6. Rogue from.</StyledLayoutContentHelper>
        </FlexItem>
        <FlexItem>
          <StyledLayoutContentHelper>
            7. Rogue from which we spring galaxies.
          </StyledLayoutContentHelper>
        </FlexItem>
        <FlexItem>
          <StyledLayoutContentHelper>
            8. Rogue from which we spring.
          </StyledLayoutContentHelper>
        </FlexItem>
        <FlexItem>
          <StyledLayoutContentHelper>
            9. Rogue from which we spring galaxies.
          </StyledLayoutContentHelper>
        </FlexItem>
        <FlexItem>
          <StyledLayoutContentHelper>10. Rogue.</StyledLayoutContentHelper>
        </FlexItem>
        <FlexItem>
          <StyledLayoutContentHelper>
            11. Rogue from which we.
          </StyledLayoutContentHelper>
        </FlexItem>
        <FlexItem>
          <StyledLayoutContentHelper>
            12. Rogue from which we.
          </StyledLayoutContentHelper>
        </FlexItem>
        <FlexItem>
          <StyledLayoutContentHelper>13. Rogue from.</StyledLayoutContentHelper>
        </FlexItem>
        <FlexItem>
          <StyledLayoutContentHelper>
            14. Rogue from which we spring galaxies.
          </StyledLayoutContentHelper>
        </FlexItem>
        <FlexItem>
          <StyledLayoutContentHelper>
            15. Rogue from which we spring.
          </StyledLayoutContentHelper>
        </FlexItem>
      </>
    ),
  },
};

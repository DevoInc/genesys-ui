import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { GridItem } from '..';
import { StyledLayoutGridContent } from '../../../stories/components/styled';

const meta: Meta<typeof GridItem> = {
  title: 'Components/Core/Layout/Grid/GridItem',
  component: GridItem,
};

export default meta;
type Story = StoryObj<typeof GridItem>;

export const Base: Story = {
  args: {
    alignSelf: 'center',
    justifySelf: 'center',
    children: (
      <StyledLayoutGridContent height="100px" width="100px">
        Grid Item
      </StyledLayoutGridContent>
    ),
  },
};

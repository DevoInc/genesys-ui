import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { GridItem } from './GridItem';
import { StyledLayoutGridContent } from '../../../../../stories/components/styled';

const meta: Meta<typeof GridItem> = {
  title: 'Components/Layout/Grid/Components/GridItem',
  component: GridItem,
};

export default meta;
type Story = StoryObj<typeof GridItem>;

export const Playground: Story = {
  args: {
    alignSelf: 'center',
    justifySelf: 'center',
    children: (
      <StyledLayoutGridContent height="100px" width="100px">
        GridItem content
      </StyledLayoutGridContent>
    ),
  },
};

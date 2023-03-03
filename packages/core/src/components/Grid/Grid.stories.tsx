import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Grid, GridItem } from '..';
import { StyledLayoutGridContent } from '../../../stories/components/styled';

const meta: Meta<typeof Grid> = {
  title: 'Components/Core/Layout/Grid/Grid',
  component: Grid,
  subcomponents: { GridItem },
  args: {
    inline: false,
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Base: Story = {
  args: {
    gridTemplateAreas: 'sidebar header sidebar main',
    gridTemplateColumns: '200px auto',
    gridTemplateRows: '40px calc(100vh - 40px)',
    children: (
      <>
        <GridItem
          gridArea="header"
          as="header"
          gridColumn="2 / 3"
          gridRow="1 / 2"
        >
          <StyledLayoutGridContent>Header</StyledLayoutGridContent>
        </GridItem>
        <GridItem
          gridArea="sidebar"
          as="aside"
          gridColumn="1 / 2"
          gridRow="1 / 3"
        >
          <StyledLayoutGridContent>Sidebar</StyledLayoutGridContent>
        </GridItem>
        <GridItem gridArea="main" as="main" gridColumn="2 / 3" gridRow="2 / 3">
          <StyledLayoutGridContent>Main</StyledLayoutGridContent>
        </GridItem>
      </>
    ),
  },
};

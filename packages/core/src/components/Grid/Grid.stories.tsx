import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Grid } from '..';
import { StyledLayoutGridContent } from '../../../stories/components/styled';

const meta: Meta<typeof Grid> = {
  title: 'Components/Core/Layout/Grid',
  component: Grid,
  subcomponents: { 'Grid.Item': Grid.Item },
  args: {
    inline: false,
    as: 'span',
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
        <Grid.Item
          gridArea="header"
          as="header"
          gridColumn="2 / 3"
          gridRow="1 / 2"
        >
          <StyledLayoutGridContent>Header</StyledLayoutGridContent>
        </Grid.Item>
        <Grid.Item
          gridArea="sidebar"
          as="aside"
          gridColumn="1 / 2"
          gridRow="1 / 3"
        >
          <StyledLayoutGridContent>Sidebar</StyledLayoutGridContent>
        </Grid.Item>
        <Grid.Item gridArea="main" as="main" gridColumn="2 / 3" gridRow="2 / 3">
          <StyledLayoutGridContent>Main</StyledLayoutGridContent>
        </Grid.Item>
      </>
    ),
  },
};

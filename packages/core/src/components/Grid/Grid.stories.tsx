import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { Grid } from './Grid';
import { LayoutGridContentHelper } from '../../../stories/components';

const meta: Meta<typeof Grid> = {
  title: 'Components/Layout/Grid',
  component: Grid,
  args: {
    inline: false,
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Playground: Story = {
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
          <LayoutGridContentHelper>Header</LayoutGridContentHelper>
        </Grid.Item>
        <Grid.Item
          gridArea="sidebar"
          as="aside"
          gridColumn="1 / 2"
          gridRow="1 / 3"
        >
          <LayoutGridContentHelper>Sidebar</LayoutGridContentHelper>
        </Grid.Item>
        <Grid.Item gridArea="main" as="main" gridColumn="2 / 3" gridRow="2 / 3">
          <LayoutGridContentHelper>Main</LayoutGridContentHelper>
        </Grid.Item>
      </>
    ),
  },
};

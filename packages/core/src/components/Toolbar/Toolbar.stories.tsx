import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Toolbar } from '.';

const meta: Meta<typeof Toolbar> = {
  title: 'Components/Layout/Toolbar',
  component: Toolbar,
  args: {
    size: 'md',
    elevation: 'stickyBottom',
  },
};

export default meta;
type Story = StoryObj<typeof Toolbar>;

export const Base: Story = {
  args: {
    children: (
      <Toolbar>
        <Toolbar.Group>
          <Toolbar.Item>Item One - G1</Toolbar.Item>
          <Toolbar.Item>Item Two - G1</Toolbar.Item>
        </Toolbar.Group>
        <Toolbar.Group>
          <Toolbar.Separator />
        </Toolbar.Group>
        <Toolbar.Group>
          <Toolbar.Item>Item One - G2</Toolbar.Item>
        </Toolbar.Group>
        <Toolbar.Group>
          <Toolbar.Item>Item One - G3</Toolbar.Item>
        </Toolbar.Group>
      </Toolbar>
    ),
  },
};

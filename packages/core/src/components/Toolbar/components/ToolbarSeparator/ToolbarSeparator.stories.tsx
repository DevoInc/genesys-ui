import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Toolbar } from '../../..';

const meta: Meta<typeof Toolbar.Separator> = {
  title: 'Components/Layout/Toolbar/Subcomponents',
  component: Toolbar.Separator,
};

export default meta;

type Story = StoryObj<typeof Toolbar.Separator>;

export const Separator: Story = {
  render: (args) => (
    <Toolbar>
      <Toolbar.Group>
        <Toolbar.Item>Item One</Toolbar.Item>
        <Toolbar.Separator {...args} />
        <Toolbar.Item>Item Two</Toolbar.Item>
      </Toolbar.Group>
    </Toolbar>
  ),
};

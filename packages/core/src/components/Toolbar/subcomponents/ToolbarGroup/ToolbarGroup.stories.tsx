import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Toolbar } from '../../..';

const meta: Meta<typeof Toolbar.Group> = {
  title: 'Components/Core/Layout/Toolbar/Subcomponents',
  component: Toolbar.Group,
};

export default meta;

type Story = StoryObj<typeof Toolbar.Group>;

export const Group: Story = {
  render: (args) => (
    <Toolbar>
      <Toolbar.Group {...args}>
        <Toolbar.Item>One</Toolbar.Item>
      </Toolbar.Group>
      <Toolbar.Group>
        <Toolbar.Item>Two</Toolbar.Item>
      </Toolbar.Group>
    </Toolbar>
  ),
};

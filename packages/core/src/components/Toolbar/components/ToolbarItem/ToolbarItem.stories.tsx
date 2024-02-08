import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Toolbar } from '../../..';

const meta: Meta<typeof Toolbar.Item> = {
  title: 'Components/Layout/Toolbar/Subcomponents',
  component: Toolbar.Item,
};

export default meta;

type Story = StoryObj<typeof Toolbar.Item>;

export const Item: Story = {
  render: (args) => (
    <Toolbar>
      <Toolbar.Item {...args}>Root</Toolbar.Item>
      <Toolbar.Group>
        <Toolbar.Item {...args}>Grouped 1</Toolbar.Item>
        <Toolbar.Item {...args}>Grouped 2</Toolbar.Item>
      </Toolbar.Group>
    </Toolbar>
  ),
};

import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Toolbar } from '../../../';

const meta: Meta<typeof Toolbar.Item> = {
  title: 'Components/Core/Layout/Toolbar/Subcomponents',
  component: Toolbar.Item,
};

export default meta;

type Story = StoryObj<typeof Toolbar.Item>;

export const Item: Story = {
  args: {
    children: "I'm a Item",
  },
  render: (args) => (
    <Toolbar>
      <Toolbar.Group>
        <Toolbar.Item {...args} />
      </Toolbar.Group>
    </Toolbar>
  ),
};

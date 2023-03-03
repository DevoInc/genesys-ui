import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Toolbar } from '../../..';

const meta: Meta<typeof Toolbar.Separator> = {
  title: 'Components/Core/Layout/Toolbar/Subcomponents',
  component: Toolbar.Separator,
};

export default meta;

type Story = StoryObj<typeof Toolbar.Separator>;

export const Separator: Story = {
  render: (args) => (
    <Toolbar>
      <Toolbar.Group>
        <Toolbar.Separator {...args} />
      </Toolbar.Group>
    </Toolbar>
  ),
};

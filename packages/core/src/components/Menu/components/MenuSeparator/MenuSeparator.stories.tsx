import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { MenuSeparator } from './MenuSeparator';
import { Menu } from '../../Menu';

const meta: Meta<typeof MenuSeparator> = {
  title: 'Components/Navigation/Menu/Components/MenuSeparator',
  component: MenuSeparator,
};

export default meta;
type Story = StoryObj<typeof MenuSeparator>;

export const Playground: Story = {
  tags: ['isHidden'],
  render: () => (
    <Menu>
      <Menu.Item label="Menu item one" />
      <Menu.Separator />
      <Menu.Item label="Menu item two" />
    </Menu>
  ),
};

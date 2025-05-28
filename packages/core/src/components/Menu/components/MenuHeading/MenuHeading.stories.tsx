import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { MenuHeading } from './MenuHeading';
import { Menu } from '../../Menu';

const meta: Meta<typeof MenuHeading> = {
  title: 'Components/Navigation/Menu/Components/MenuHeading',
  component: MenuHeading,
};

export default meta;
type Story = StoryObj<typeof MenuHeading>;

export const Playground: Story = {
  args: { children: 'Heading' },
  render: (args) =>
    ((props) => (
      <Menu>
        <Menu.Item label="Menu item one" />
        <Menu.Heading {...props} />
        <Menu.Item label="Menu item two" />
        <Menu.Item label="Menu item three" />
        <Menu.Item label="Menu item four" />
      </Menu>
    ))(args),
};

import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { MenuItem } from '../MenuItem';
import { MenuHeading } from './MenuHeading';

const meta: Meta<typeof MenuHeading> = {
  title: 'Components/Navigation/Menu/Components',
  component: MenuHeading,
};

export default meta;
type Story = StoryObj<typeof MenuHeading>;

export const Heading: Story = {
  args: { children: 'Heading' },
  render: (args) =>
    ((props) => (
      <>
        <MenuItem label="Menu item one" />
        <MenuHeading {...props} />
        <MenuItem label="Menu item two" />
        <MenuItem label="Menu item three" />
        <MenuItem label="Menu item four" />
      </>
    ))(args),
};

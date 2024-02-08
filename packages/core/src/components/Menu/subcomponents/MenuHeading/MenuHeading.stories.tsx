import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { MenuItem, MenuHeading } from '../../subcomponents';

const meta: Meta<typeof MenuHeading> = {
  title: 'Components/Navigation/Menu/Subcomponents',
  component: MenuHeading,
};

export default meta;
type Story = StoryObj<typeof MenuHeading>;

export const Heading: Story = {
  args: { children: 'Heading' },
  render: (args) =>
    ((args) => (
      <>
        <MenuItem label="Menu item one" />
        <MenuHeading {...args} />
        <MenuItem label="Menu item two" />
        <MenuItem label="Menu item three" />
        <MenuItem label="Menu item four" />
      </>
    ))(args),
};

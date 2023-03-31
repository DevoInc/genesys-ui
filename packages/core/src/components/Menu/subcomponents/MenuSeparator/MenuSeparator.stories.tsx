import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { MenuItem, MenuSeparator } from '../../subcomponents';

const meta: Meta<typeof MenuSeparator> = {
  title: 'Components/Core/Navigation/Menu/Subcomponents',
  component: MenuSeparator,
};

export default meta;
type Story = StoryObj<typeof MenuSeparator>;

export const Separator: Story = {
  render: (args) =>
    ((args) => (
      <>
        <MenuItem label="Menu item one" />
        <MenuSeparator />
        <MenuItem label="Menu item two" />
      </>
    ))(args),
};

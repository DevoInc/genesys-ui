import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { MenuItem, MenuSeparator } from '../../subcomponents';

const meta: Meta<typeof MenuSeparator> = {
  title: 'Components/Navigation/Menu/Subcomponents',
  component: MenuSeparator,
};

export default meta;
type Story = StoryObj<typeof MenuSeparator>;

export const Separator: Story = {
  render: () => (
    <>
      <MenuItem label="Menu item one" />
      <MenuSeparator />
      <MenuItem label="Menu item two" />
    </>
  ),
};

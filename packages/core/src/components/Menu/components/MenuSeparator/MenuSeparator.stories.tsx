import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { MenuItem } from '../MenuItem';
import { MenuSeparator } from './MenuSeparator';

const meta: Meta<typeof MenuSeparator> = {
  title: 'Components/Navigation/Menu/Components',
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

import { Meta, StoryObj } from '@storybook/react';
import { MenuItem } from '.';

const meta: Meta<typeof MenuItem> = {
  title: 'Components/Core/Navigation/MenuItem',
  component: MenuItem,
};

export default meta;
type Story = StoryObj<typeof MenuItem>;

export const Base: Story = {
  args: {
    label: 'Menu item content',
  },
};

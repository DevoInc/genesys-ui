import { Meta, StoryObj } from '@storybook/react';

import { AppBar } from '../..';

const meta: Meta<typeof AppBar.Divider> = {
  title: 'Components/Core/Navigation/AppBar/Subcomponents',
  component: AppBar.Divider,
};

export default meta;
type Story = StoryObj<typeof AppBar.Divider>;

export const Divider: Story = {};

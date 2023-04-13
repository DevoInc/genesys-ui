import { Meta, StoryObj } from '@storybook/react';

import { AppBarDivider } from '..';

const meta: Meta<typeof AppBarDivider> = {
  title: 'Components/Core/Navigation/AppBar/Subcomponents',
  component: AppBarDivider,
};

export default meta;
type Story = StoryObj<typeof AppBarDivider>;

export const Divider: Story = {};

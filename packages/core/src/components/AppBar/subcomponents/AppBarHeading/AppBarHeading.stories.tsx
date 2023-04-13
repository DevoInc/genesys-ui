import { Meta, StoryObj } from '@storybook/react';

import { AppBar } from '../..';

const meta: Meta<typeof AppBar.Heading> = {
  title: 'Components/Core/Navigation/AppBar/Subcomponents',
  component: AppBar.Heading,
};

export default meta;
type Story = StoryObj<typeof AppBar.Heading>;

export const Heading: Story = {
  args: { children: 'Title' },
};

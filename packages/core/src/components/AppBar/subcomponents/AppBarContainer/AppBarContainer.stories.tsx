import { Meta, StoryObj } from '@storybook/react';

import { AppBar } from '../..';

const meta: Meta<typeof AppBar.Container> = {
  title: 'Components/Core/Navigation/AppBar/Subcomponents',
  component: AppBar.Container,
};

export default meta;
type Story = StoryObj<typeof AppBar.Container>;

export const Container: Story = {
  args: { children: 'Content' },
};

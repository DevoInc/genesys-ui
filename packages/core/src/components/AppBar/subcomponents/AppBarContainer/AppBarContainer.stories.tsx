import { Meta, StoryObj } from '@storybook/react';

import { AppBarContainer } from '..';

const meta: Meta<typeof AppBarContainer> = {
  title: 'Components/Core/Navigation/AppBar/Subcomponents',
  component: AppBarContainer,
};

export default meta;
type Story = StoryObj<typeof AppBarContainer>;

export const Container: Story = {
  args: { children: 'Content' },
};

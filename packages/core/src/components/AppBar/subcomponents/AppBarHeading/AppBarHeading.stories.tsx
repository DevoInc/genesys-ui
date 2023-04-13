import { Meta, StoryObj } from '@storybook/react';

import { AppBarHeading } from '..';

const meta: Meta<typeof AppBarHeading> = {
  title: 'Components/Core/Navigation/AppBar/Subcomponents',
  component: AppBarHeading,
};

export default meta;
type Story = StoryObj<typeof AppBarHeading>;

export const Heading: Story = {
  args: { children: 'Title' },
};

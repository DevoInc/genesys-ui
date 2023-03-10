import { Meta, StoryObj } from '@storybook/react';

import { AppBar } from './AppBar';
import { mainActions, tabs } from './__stories__/content';

const meta: Meta<typeof AppBar> = {
  title: 'Components/Core/Navigation/AppBar',
  component: AppBar,
};

export default meta;
type Story = StoryObj<typeof AppBar>;

export const Base: Story = {
  args: {
    mainActions,
    tabs,
  },
};

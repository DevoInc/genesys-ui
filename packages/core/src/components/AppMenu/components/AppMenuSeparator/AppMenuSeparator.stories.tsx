import { Meta, StoryObj } from '@storybook/react';

import { AppMenu } from '../../AppMenu';

const meta: Meta<typeof AppMenu.Separator> = {
  title: 'Components/Navigation/AppMenu/Components/AppMenuSeparator',
  component: AppMenu.Separator,
  args: {
    collapsed: false,
  },
};

export default meta;
type Story = StoryObj<typeof AppMenu.Separator>;

export const Playground: Story = {};

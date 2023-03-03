import { Meta, StoryObj } from '@storybook/react';

import { TabsAside } from '../../..';

const meta: Meta<typeof TabsAside> = {
  title: 'Components/Core/Navigation/Tabs/Subcomponents',
  component: TabsAside,
};

export default meta;

type Story = StoryObj<typeof TabsAside>;

export const Aside: Story = {
  args: { children: 'Aside area' },
};

import { Meta, StoryObj } from '@storybook/react';

import { Tabs } from '../../Tabs';

const meta: Meta<typeof Tabs.Item> = {
  title: 'Components/Navigation/Tabs/Components',
  component: Tabs.Item,
  args: {
    label: 'Tab item',
    size: 'md',
    state: 'enabled',
  },
};

export default meta;
type Story = StoryObj<typeof Tabs.Item>;

export const Item: Story = {};

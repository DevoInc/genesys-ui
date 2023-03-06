import { Meta, StoryObj } from '@storybook/react';

import { ContentSwitcherItem } from './ContentSwitcherItem';

const meta: Meta<typeof ContentSwitcherItem> = {
  title: 'Components/Core/Navigation/ContentSwitcher/Subcomponents/Item',
  component: ContentSwitcherItem,
  args: {},
};

export default meta;
type Story = StoryObj<typeof ContentSwitcherItem>;

export const Base: Story = {
  args: {
    size: 'md',
    icon: 'heart_full',
    state: 'enabled',
    onChange: null,
    children: 'ContentSwitcher item',
  },
};

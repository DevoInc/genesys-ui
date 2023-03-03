import { Meta, StoryObj } from '@storybook/react';

import { TabsItem } from '../../..';

const meta: Meta<typeof TabsItem> = {
  title: 'Components/Core/Navigation/Tabs/Subcomponents',
  component: TabsItem,
};

export default meta;

type Story = StoryObj<typeof TabsItem>;

export const Item: Story = {
  args: {
    label: 'Default tab',
    onActionClick: null,
  },
};

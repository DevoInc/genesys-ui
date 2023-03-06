import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Tabs, TabsItem } from '../../..';

const meta: Meta<typeof TabsItem> = {
  title: 'Components/Core/Navigation/Tabs/Subcomponents',
  component: TabsItem,
};

export default meta;

type Story = StoryObj<typeof TabsItem>;

export const Item: Story = {
  render: (args) =>
    ((args) => (
      <Tabs>
        <Tabs.Item {...args} state="selected" label="Tab 1" />
        <Tabs.Item {...args} label="Tab 2" />
      </Tabs>
    ))(args),
};

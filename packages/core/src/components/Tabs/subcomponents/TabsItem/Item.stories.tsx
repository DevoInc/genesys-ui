import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Tabs, TabsItem } from '../../..';

const meta: Meta<typeof TabsItem> = {
  title: 'Components/Navigation/Tabs/Subcomponents',
  component: TabsItem,
};

export default meta;
type Story = StoryObj<typeof TabsItem>;

export const Item: Story = {
  render: (args) =>
    ((props) => (
      <Tabs>
        <Tabs.Item {...props} state="selected" label="Tab 1" />
        <Tabs.Item {...props} label="Tab 2" />
      </Tabs>
    ))(args),
};

import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Tabs } from '../../Tabs';

const meta: Meta<typeof Tabs.Divider> = {
  title: 'Components/Navigation/Tabs/Components',
  component: Tabs.Divider,
};

export default meta;

type Story = StoryObj<typeof Tabs.Divider>;

export const Divider: Story = {
  render: (args) =>
    ((args) => (
      <Tabs>
        <Tabs.Item state="selected" label="Tab 1" />
        <Tabs.Item label="Tab 2" />
        <Tabs.Divider {...args} />
        <Tabs.Item label="Tab 3" />
      </Tabs>
    ))(args),
};

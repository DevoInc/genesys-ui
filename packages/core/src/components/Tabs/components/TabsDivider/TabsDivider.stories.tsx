import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { Tabs } from '../../Tabs';

const meta: Meta<typeof Tabs.Divider> = {
  title: 'Components/Navigation/Tabs/Components/TabsDivider',
  component: Tabs.Divider,
};

export default meta;

type Story = StoryObj<typeof Tabs.Divider>;

export const Playground: Story = {
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

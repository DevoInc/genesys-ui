import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Tabs } from '../../Tabs';

const meta: Meta<typeof Tabs.Aside> = {
  title: 'Components/Navigation/Tabs/Components',
  component: Tabs.Aside,
};

export default meta;

type Story = StoryObj<typeof Tabs.Aside>;

export const Aside: Story = {
  render: (args) =>
    ((args) => (
      <Tabs>
        <Tabs.Item state="selected" label="Tab 1" />
        <Tabs.Item label="Tab 2" />
        <Tabs.Aside {...args}>Tabs Aside</Tabs.Aside>
      </Tabs>
    ))(args),
};

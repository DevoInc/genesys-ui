import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Tabs, TabsAside } from '../../..';

const meta: Meta<typeof TabsAside> = {
  title: 'Components/Navigation/Tabs/Subcomponents',
  component: TabsAside,
};

export default meta;

type Story = StoryObj<typeof TabsAside>;

export const Aside: Story = {
  render: (args) =>
    ((args) => (
      <Tabs>
        <Tabs.Item {...args} state="selected" label="Tab 1" />
        <Tabs.Item {...args} label="Tab 2" />
        <Tabs.Aside>Tabs Aside</Tabs.Aside>
      </Tabs>
    ))(args),
};

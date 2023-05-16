import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { IconButtonRemove, Tabs, TabsItem, TabsAside } from '..';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Core/Navigation/Tabs',
  component: Tabs,
  subcomponents: { TabsItem, TabsAside },
  args: {
    colorScheme: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Base: Story = {
  args: { contained: true, 'aria-label': 'DemoTabs' },
  render: (args) =>
    ((args) => {
      const [activeTab, setActiveTab] = React.useState(0);
      return (
        <Tabs {...args}>
          <Tabs.Item
            icon="gi-check_thick"
            label="Tiny"
            onTabClick={() => setActiveTab(0)}
            state={activeTab === 0 ? 'selected' : undefined}
            wide={false}
          />
          <Tabs.Item
            icon="gi-check_thick"
            label="Tab with a very very long title"
            onTabClick={() => setActiveTab(1)}
            state={activeTab === 1 ? 'selected' : undefined}
            wide={false}
          />
          <Tabs.Item
            label="Normal tab"
            onTabClick={() => setActiveTab(2)}
            state={activeTab === 2 ? 'selected' : undefined}
            wide={false}
          />

          <Tabs.Item
            label="Disabled tab"
            onTabClick={() => setActiveTab(3)}
            state="disabled"
            wide={false}
          />
          <Tabs.Aside>
            <IconButtonRemove size="sm" title="Close all tabs" />
          </Tabs.Aside>
        </Tabs>
      );
    })(args),
};

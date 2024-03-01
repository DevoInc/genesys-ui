import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { IconButtonRemove, Tabs } from '..';
import { GICheckThick } from '@devoinc/genesys-icons';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Navigation/Tabs',
  component: Tabs,
  args: {
    colorScheme: 'default',
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Base: Story = {
  args: { contained: true, 'aria-label': 'DemoTabs' },
  render: (args) =>
    ((props) => {
      const [activeTab, setActiveTab] = React.useState(0);
      return (
        <Tabs {...props}>
          <Tabs.Item
            icon={<GICheckThick />}
            label="Tiny"
            onClick={() => setActiveTab(0)}
            state={activeTab === 0 ? 'selected' : undefined}
            wide={false}
          />
          <Tabs.Item
            icon={<GICheckThick />}
            label="Tab with a very very long title"
            onClick={() => setActiveTab(1)}
            state={activeTab === 1 ? 'selected' : undefined}
            wide={false}
          />
          <Tabs.Item
            label="Normal tab"
            onClick={() => setActiveTab(2)}
            state={activeTab === 2 ? 'selected' : undefined}
            wide={false}
          />

          <Tabs.Item
            label="Disabled tab"
            onClick={() => setActiveTab(3)}
            state="disabled"
            wide={false}
          />
          <Tabs.Aside>
            <IconButtonRemove size="sm" tooltip="Close all tabs" />
          </Tabs.Aside>
        </Tabs>
      );
    })(args),
};

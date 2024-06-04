import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button, IconButtonRemove, Tabs } from '..';
import { GIChart, GICheckThick } from '@devoinc/genesys-icons';
import { useTabsAccessibility } from './hooks';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Navigation/Tabs',
  component: Tabs,
  args: {
    colorScheme: 'base',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Base: Story = {
  render: (args) =>
    ((args) => {
      const tabsRef = React.useRef<HTMLDivElement>();
      const [activeTab, setActiveTab] = React.useState(0);
      useTabsAccessibility({ activeTab, tabsRef });
      return (
        <Tabs {...args}>
          <Tabs.List activeTabIndex={activeTab} ref={tabsRef}>
            <Tabs.Item
              icon={<GIChart />}
              label="Tiny"
              onClick={() => setActiveTab(0)}
              state={activeTab === 0 ? 'selected' : undefined}
            />
            <Tabs.Item
              icon={<GICheckThick />}
              label="Tab with a very long label"
              onClick={() => setActiveTab(1)}
              state={activeTab === 1 ? 'selected' : undefined}
            />
            <Tabs.Item
              label="Normal tab"
              onClick={() => setActiveTab(2)}
              state={activeTab === 2 ? 'selected' : undefined}
            />
            <Tabs.Item
              label="Disabled tab"
              onClick={() => setActiveTab(3)}
              state="disabled"
            />
          </Tabs.List>
        </Tabs>
      );
    })(args),
};

export const WithAsideContent: Story = {
  name: 'With aside content',
  render: () =>
    (() => {
      const tabsRef = React.useRef<HTMLDivElement>();
      const [activeTab, setActiveTab] = React.useState(0);
      useTabsAccessibility({ activeTab, tabsRef });
      return (
        <Tabs aria-label="Demo tabs" contained>
          <Tabs.List activeTabIndex={activeTab} ref={tabsRef}>
            <Tabs.Item
              icon={<GIChart />}
              label="Tiny"
              onClick={() => setActiveTab(0)}
              state={activeTab === 0 ? 'selected' : undefined}
            />
            <Tabs.Item
              icon={<GICheckThick />}
              label="Tab with a very long text"
              onClick={() => setActiveTab(1)}
              state={activeTab === 1 ? 'selected' : undefined}
            />
            <Tabs.Item
              label="Normal tab"
              onClick={() => setActiveTab(2)}
              state={activeTab === 2 ? 'selected' : undefined}
            />
            <Tabs.Item
              label="Disabled tab"
              onClick={() => setActiveTab(3)}
              state="disabled"
            />
          </Tabs.List>
          <Tabs.Aside marginLeft="0">
            <IconButtonRemove
              onClick={(e) => {
                e?.stopPropagation();
              }}
              size="sm"
              tooltip="Close all tabs"
            />
          </Tabs.Aside>
        </Tabs>
      );
    })(),
};

export const Closable: Story = {
  name: 'Closable',
  render: () =>
    (() => {
      const tabsRef = React.useRef<HTMLDivElement>();
      const [activeTab, setActiveTab] = React.useState(0);
      const [tabs, setTabs] = React.useState([
        { icon: <GIChart />, label: 'Tiny' },
        { icon: <GICheckThick />, label: 'Tab with a very very long title' },
        { label: 'Normal tab' },
        { label: 'Disabled tab', disabled: true },
      ]);
      useTabsAccessibility({ activeTab, tabsRef });
      //useClosableTabs({ activeTab, tabsRef, tabsLength: tabs.length });
      console.log(activeTab);
      return (
        <Tabs aria-label="Demo tabs" contained>
          <Tabs.Aside marginLeft="0" marginRight="cmp-sm">
            <Button
              size="sm"
              tooltip="Close all tabs"
              onClick={() => {
                setTabs((prevTabs) => [...prevTabs, { label: 'New tab' }]);
              }}
            >
              Add tab
            </Button>
          </Tabs.Aside>
          <Tabs.List activeTabIndex={activeTab} ref={tabsRef}>
            {tabs.map((tab, idx) => (
              <Tabs.Item
                key={idx}
                icon={tab.icon}
                label={tab.label}
                onClick={() => {
                  setActiveTab(idx);
                }}
                onClose={() => {
                  setTabs((prevTabs) =>
                    prevTabs.filter((_, index) => index !== idx),
                  );
                }}
                state={
                  tab.disabled
                    ? 'disabled'
                    : activeTab === idx
                      ? 'selected'
                      : undefined
                }
              />
            ))}
          </Tabs.List>
          <Tabs.Aside>
            <Tabs.Divider />
            <IconButtonRemove
              size="sm"
              state={tabs.length === 0 ? 'disabled' : undefined}
              tooltip="Close all tabs"
              onClick={() => {
                setTabs([]);
              }}
            />
          </Tabs.Aside>
        </Tabs>
      );
    })(),
};

export const Context: Story = {
  tags: ['isHidden'],
  render: () =>
    (() => {
      const tabsRef = React.useRef<HTMLDivElement>();
      const [activeTab, setActiveTab] = React.useState(0);
      useTabsAccessibility({ activeTab, tabsRef });
      return (
        <Tabs colorScheme="primary" size="lg" wide>
          <Tabs.List activeTabIndex={activeTab} ref={tabsRef}>
            <Tabs.Item
              icon={<GIChart />}
              label="Tiny"
              onClick={() => setActiveTab(0)}
              state={activeTab === 0 ? 'selected' : undefined}
            />
            <Tabs.Item
              icon={<GICheckThick />}
              label="Tab with a very long label"
              onClick={() => setActiveTab(1)}
              state={activeTab === 1 ? 'selected' : undefined}
            />
            <Tabs.Item
              label="Normal tab"
              onClick={() => setActiveTab(2)}
              state={activeTab === 2 ? 'selected' : undefined}
            />
          </Tabs.List>
        </Tabs>
      );
    })(),
};

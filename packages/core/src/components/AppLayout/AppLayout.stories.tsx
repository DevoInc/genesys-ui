import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { AppLayout } from './AppLayout';
import { AppBar } from '../AppBar';
import { Tabs, useTabsAccessibility } from '../Tabs';
import { Panel } from '../Panel';
import { Typography } from '../Typography';
import { TabsCmp } from './__stories__';
import { Flex } from '../Flex';

const meta: Meta<typeof AppLayout> = {
  title: 'Components/Layout/AppLayout',
  component: AppLayout,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof AppLayout>;

export const PlaygroundBase: Story = {
  tags: ['isHidden'],
  render: (args) =>
    ((args) => (
      <AppLayout
        {...args}
        style={{ backgroundColor: 'rgba(63, 187, 226, 0.2)', padding: '16px' }}
      >
        <AppLayout.Bar style={{ backgroundColor: 'rgba(51, 255, 159, 0.2)' }}>
          <Flex alignItems="center" justifyContent="center" height="5rem">
            AppLayout.Bar
          </Flex>
        </AppLayout.Bar>
        <AppLayout.Lead style={{ backgroundColor: 'rgba(255, 104, 66, 0.2)' }}>
          <Flex alignItems="center" justifyContent="center" height="5rem">
            AppLayout.Lead
          </Flex>
        </AppLayout.Lead>
        <AppLayout.Content
          style={{ backgroundColor: 'rgba(182, 23, 226, 0.2)' }}
        >
          <Flex alignItems="center" justifyContent="center" height="5rem">
            AppLayout.Content
          </Flex>
        </AppLayout.Content>
      </AppLayout>
    ))(args),
};

export const Playground: Story = {
  render: (args) =>
    ((args) => (
      <AppLayout {...args}>
        <AppLayout.Bar>
          <AppBar sticky>
            <AppBar.Heading id="bar-heading">Title</AppBar.Heading>
            <AppBar.Divider />
            <AppBar.Navigation id="bar-navigation">
              <TabsCmp />
            </AppBar.Navigation>
          </AppBar>
        </AppLayout.Bar>
        <AppLayout.Content>
          <Panel height="100%">
            <Panel.Body>Content</Panel.Body>
          </Panel>
        </AppLayout.Content>
      </AppLayout>
    ))(args),
};

export const DoubleNavigation: Story = {
  tags: ['isHidden'],
  render: () => {
    const tabsRef = React.useRef<HTMLDivElement>();
    const [activeTab, setActiveTab] = React.useState(0);
    useTabsAccessibility({ activeTab, tabsRef });
    return (
      <AppLayout>
        <AppLayout.Bar>
          <AppBar>
            <AppBar.Heading id="bar-heading">Title</AppBar.Heading>
            <AppBar.Divider />
            <AppBar.Navigation id="bar-navigation">
              <TabsCmp />
            </AppBar.Navigation>
          </AppBar>
        </AppLayout.Bar>
        <AppLayout.Lead>
          <Tabs contained>
            <Tabs.List activeTabIndex={activeTab} ref={tabsRef}>
              <Tabs.Item
                size="sm"
                label="Subitem 1"
                onClick={() => setActiveTab(0)}
                state={activeTab === 0 ? 'selected' : undefined}
              />
              <Tabs.Item
                size="sm"
                label="Subitem 2"
                onClick={() => setActiveTab(1)}
                state={activeTab === 1 ? 'selected' : undefined}
              />
              <Tabs.Item
                size="sm"
                label="Subitem 3"
                onClick={() => setActiveTab(2)}
                state={activeTab === 2 ? 'selected' : undefined}
              />
            </Tabs.List>
          </Tabs>
        </AppLayout.Lead>
        <AppLayout.Content>
          <Panel height="100%">
            <Panel.Body>Content</Panel.Body>
          </Panel>
        </AppLayout.Content>
      </AppLayout>
    );
  },
};

export const ContentPadding: Story = {
  tags: ['isHidden'],
  render: () => {
    return (
      <AppLayout>
        <AppLayout.Bar>
          <AppBar sticky>
            <AppBar.Heading id="bar-heading">Title</AppBar.Heading>
            <AppBar.Divider />
            <AppBar.Navigation id="bar-navigation">
              <TabsCmp />
            </AppBar.Navigation>
          </AppBar>
        </AppLayout.Bar>
        <AppLayout.Content padding="0">
          <Typography.Paragraph>Without padding</Typography.Paragraph>
        </AppLayout.Content>
      </AppLayout>
    );
  },
};

export const NoHeader: Story = {
  tags: ['isHidden'],
  render: () => (
    <AppLayout>
      <AppLayout.Content>
        <Typography.Paragraph>Without header</Typography.Paragraph>
      </AppLayout.Content>
    </AppLayout>
  ),
};

import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { AppLayout } from './AppLayout';
import { AppBar } from '../AppBar';
import { Tabs, useTabsAccessibility } from '../Tabs';
import { Panel } from '../Panel';
import { Typography } from '../Typography';
import { TabsCmp } from './__stories__';

const meta: Meta<typeof AppLayout> = {
  title: 'Components/Layout/AppLayout',
  component: AppLayout,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof AppLayout>;

export const Base: Story = {
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
                onClick={() => setActiveTab(0)}
                state={activeTab === 1 ? 'selected' : undefined}
              />
              <Tabs.Item
                size="sm"
                label="Subitem 3"
                onClick={() => setActiveTab(0)}
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

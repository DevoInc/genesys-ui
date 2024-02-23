import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { AppLayout } from './AppLayout';
import { AppBar } from '../AppBar';
import { Tabs } from '../Tabs';
import { Panel } from '../Panel';

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
  render: () => (
    <AppLayout>
      <AppLayout.Bar>
        <AppBar sticky>
          <AppBar.Heading id="bar-heading">Title</AppBar.Heading>
          <AppBar.Divider />
          <AppBar.Navigation
            id="bar-navigation"
            tabs={[
              <Tabs.Item key="1" size="lg" state={'selected'} label="Item 1" />,
              <Tabs.Item key="2" size="lg" label="Item 2" />,
              <Tabs.Item key="3" size="lg" label="Item 3" />,
            ]}
          />
        </AppBar>
      </AppLayout.Bar>
      <AppLayout.Content>
        <Panel height="100%">
          <Panel.Body>Content</Panel.Body>
        </Panel>
      </AppLayout.Content>
    </AppLayout>
  ),
};

export const DoubleNavigation: Story = {
  render: () => (
    <AppLayout>
      <AppLayout.Bar>
        <AppBar>
          <AppBar.Heading id="bar-heading">Title</AppBar.Heading>
          <AppBar.Divider />
          <AppBar.Navigation
            id="bar-navigation"
            tabs={[
              <Tabs.Item key="1" size="lg" state={'selected'} label="Item 1" />,
              <Tabs.Item key="2" size="lg" label="Item 2" />,
              <Tabs.Item key="3" size="lg" label="Item 3" />,
            ]}
          />
        </AppBar>
      </AppLayout.Bar>
      <AppLayout.Lead>
        <Tabs contained>
          <Tabs.Item size="sm" state={'selected'} label="Subitem 1" />
          <Tabs.Item size="sm" label="Subitem 2" />
          <Tabs.Item size="sm" label="Subitem 3" />
        </Tabs>
      </AppLayout.Lead>
      <AppLayout.Content>
        <Panel height="100%">
          <Panel.Body>Content</Panel.Body>
        </Panel>
      </AppLayout.Content>
    </AppLayout>
  ),
};

export const ContentPadding: Story = {
  render: () => (
    <AppLayout>
      <AppLayout.Bar>
        <AppBar sticky>
          <AppBar.Heading id="bar-heading">Title</AppBar.Heading>
          <AppBar.Divider />
          <AppBar.Navigation
            id="bar-navigation"
            tabs={[
              <Tabs.Item key="1" size="lg" state={'selected'} label="Item 1" />,
              <Tabs.Item key="2" size="lg" label="Item 2" />,
              <Tabs.Item key="3" size="lg" label="Item 3" />,
            ]}
          />
        </AppBar>
      </AppLayout.Bar>
      <AppLayout.Content padding="0">Without padding</AppLayout.Content>
    </AppLayout>
  ),
};

export const NoHeading: Story = {
  render: () => (
    <AppLayout>
      <AppLayout.Content>Without heading</AppLayout.Content>
    </AppLayout>
  ),
};

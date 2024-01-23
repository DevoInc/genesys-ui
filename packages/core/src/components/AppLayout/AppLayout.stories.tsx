import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { AppLayout } from './AppLayout';
import { AppBar } from '../AppBar';
import { Tabs } from '../Tabs';
import { Panel } from '../Panel';

const meta: Meta<typeof AppLayout> = {
  title: 'Components/Core/Layout/AppLayout',
  component: AppLayout,
  parameters: {
    layout: 'fullscreen',
  },
  subcomponents: {
    'AppLayout.Bar': AppLayout.Bar,
    'AppLayout.Lead': AppLayout.Lead,
    'AppLayout.Content': AppLayout.Content,
  },
};

export default meta;
type Story = StoryObj<typeof AppLayout>;

export const Base: Story = {
  render: () => (
    <AppLayout>
      <AppLayout.Bar>
        <AppBar.Container sticky>
          <AppBar.Heading id="bar-heading">Title</AppBar.Heading>
          <AppBar.Divider id="bar-divider" />
          <AppBar.Navigation id="bar-navigation">
            <Tabs colorScheme="primary" contained={false}>
              <Tabs.Item size="lg" state={'selected'} label="Item 1" />
              <Tabs.Item size="lg" label="Item 2" />
              <Tabs.Item size="lg" label="Item 3" />
            </Tabs>
          </AppBar.Navigation>
        </AppBar.Container>
      </AppLayout.Bar>
      <AppLayout.Content>
        <Panel.Container height="100%">
          <Panel.Body>Content</Panel.Body>
        </Panel.Container>
      </AppLayout.Content>
    </AppLayout>
  ),
};

export const DoubleNavigation: Story = {
  render: () => (
    <AppLayout>
      <AppLayout.Bar>
        <AppBar.Container>
          <AppBar.Heading id="bar-heading">Title</AppBar.Heading>
          <AppBar.Divider id="bar-divider" />
          <AppBar.Navigation id="bar-navigation">
            <Tabs colorScheme="primary" contained={false}>
              <Tabs.Item size="lg" state={'selected'} label="Item 1" />
              <Tabs.Item size="lg" label="Item 2" />
              <Tabs.Item size="lg" label="Item 3" />
            </Tabs>
          </AppBar.Navigation>
        </AppBar.Container>
      </AppLayout.Bar>
      <AppLayout.Lead>
        <Tabs contained>
          <Tabs.Item size="sm" state={'selected'} label="Subitem 1" />
          <Tabs.Item size="sm" label="Subitem 2" />
          <Tabs.Item size="sm" label="Subitem 3" />
        </Tabs>
      </AppLayout.Lead>
      <AppLayout.Content>
        <Panel.Container height="100%">
          <Panel.Body>Content</Panel.Body>
        </Panel.Container>
      </AppLayout.Content>
    </AppLayout>
  ),
};

export const ContentPadding: Story = {
  render: () => (
    <AppLayout>
      <AppLayout.Bar>
        <AppBar.Container sticky>
          <AppBar.Heading id="bar-heading">Title</AppBar.Heading>
          <AppBar.Divider id="bar-divider" />
          <AppBar.Navigation id="bar-navigation">
            <Tabs colorScheme="primary" contained={false}>
              <Tabs.Item size="lg" state={'selected'} label="Item 1" />
              <Tabs.Item size="lg" label="Item 2" />
              <Tabs.Item size="lg" label="Item 3" />
            </Tabs>
          </AppBar.Navigation>
        </AppBar.Container>
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

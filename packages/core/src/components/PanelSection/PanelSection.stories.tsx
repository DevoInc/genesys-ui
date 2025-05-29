import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import { PanelSection } from './PanelSection';
import { Button } from '../Button';
import { TextBlock } from '../Panel/__stories__/helpers';
import { Tabs, useTabsAccessibility } from '../Tabs';

export const TabsCmp = () => {
  const tabsRef = React.useRef<HTMLDivElement>();
  const [activeTab, setActiveTab] = React.useState(0);
  useTabsAccessibility({ activeTab, tabsRef });
  return (
    <Tabs contained size="sm">
      <Tabs.List activeTabIndex={activeTab} ref={tabsRef} padding="0 cmp-xs">
        <Tabs.Item
          key="1"
          label="Item 1"
          onClick={() => setActiveTab(0)}
          size="sm"
          state={activeTab === 0 ? 'selected' : undefined}
        />
        <Tabs.Item
          key="2"
          onClick={() => setActiveTab(1)}
          state={activeTab === 1 ? 'selected' : undefined}
          size="sm"
          label="Item 2"
        />
        <Tabs.Item
          key="3"
          onClick={() => setActiveTab(2)}
          state={activeTab === 2 ? 'selected' : undefined}
          size="sm"
          label="Item 3"
        />
      </Tabs.List>
    </Tabs>
  );
};

const meta: Meta<typeof PanelSection> = {
  title: 'Components/Layout/PanelSection',
  component: PanelSection,
  args: {
    backwardTooltip: 'Back',
    footerHasBackground: false,
    height: '100vh',
    removeContentSpace: false,
  },
};

export default meta;
type Story = StoryObj<typeof PanelSection>;

export const Playground: Story = {
  args: {
    children: <>{TextBlock}</>,
    title: 'PanelSection title',
  },
};

export let WithScroll: Story = {
  tags: ['isHidden'],
  args: {
    title: 'Panel title',
    subtitle: 'Panel subtitle',
    helpUrl: 'https://www.devo.com/',
    helpTooltip: 'Go to docs',
    height: '300px',
    onClickBackwardNav: () => {
      // eslint-disable-next-line no-alert
      alert('Going back!');
    },
    children: TextBlock,
  },
};

export let WithNavigation: Story = {
  tags: ['isHidden'],
  args: {
    title: 'Panel title',
    subtitle: 'Panel subtitle',
    helpUrl: 'https://www.devo.com/',
    helpTooltip: 'Go to docs',
    height: '300px',
    children: TextBlock,
    navigation: <TabsCmp />,
  },
};

export const RemovedSpaceAndScroll: Story = {
  tags: ['isHidden'],
  args: {
    title: 'Panel title',
    subtitle: 'Panel subtitle',
    height: '300px',
    helpUrl: 'https://www.devo.com/',
    helpTooltip: 'Go to docs',
    removeContentSpace: true,
    children: TextBlock,
  },
};

export const WithHeaderActions: Story = {
  tags: ['isHidden'],
  args: {
    title: 'Panel title',
    subtitle: 'Panel subtitle',
    helpUrl: 'https://www.devo.com/',
    helpTooltip: 'Go to docs',
    headerActions: [
      <Button colorScheme="accent" key="btn-1">
        Manage entities
      </Button>,
      <Button colorScheme="accent-high" key="btn-2">
        Create new entity
      </Button>,
    ],
    children: TextBlock,
  },
};

export const WithFooterActions: Story = {
  tags: ['isHidden'],
  args: {
    title: 'Panel title',
    subtitle: 'Panel subtitle',
    helpUrl: 'https://www.devo.com/',
    helpTooltip: 'Go to docs',
    footerActions: [
      <Button colorScheme="accent" key="btn-1">
        OK
      </Button>,
    ],
    children: TextBlock,
  },
};

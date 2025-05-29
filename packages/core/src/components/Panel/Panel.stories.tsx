import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import {
  GIArrowLeft,
  GIChartFlame,
  GIMenuAltVertical,
} from '@devoinc/genesys-icons';

import { Panel } from './Panel';
import { Button } from '../Button';
import { IconButton } from '../IconButton';
import { TextBlock, TextBlockSM } from './__stories__/helpers';
import { lorem } from '../../../stories/utils/fillerTexts';
import { HFlex } from '../HFlex';
import { Box } from '../Box';
import { InputControl } from '../InputControl';
import { Tabs, useTabsAccessibility } from '../Tabs';

const meta: Meta<typeof Panel> = {
  title: 'Components/Layout/Panel',
  component: Panel,
  args: {
    elevation: 'raised',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof Panel>;

export const Playground: Story = {
  args: {
    children: [
      <Panel.Header key="header-1" bordered title="Header tittle" />,
      <Panel.Body key="body-1">{lorem}</Panel.Body>,
      <Panel.Footer
        key="footer-1"
        bordered
        actions={[
          <Button key={1} colorScheme="quiet">
            Cancel
          </Button>,
          <Button key={2} colorScheme="accent">
            Apply
          </Button>,
        ]}
      />,
    ],
  },
};

export const Complex: Story = {
  tags: ['isHidden'],
  args: {
    children: [
      <Panel.Header
        key="header-1"
        bordered
        icon={<GIChartFlame />}
        title="Header tittle"
        actions={[
          <IconButton
            colorScheme="quiet"
            key="header-action-1"
            hasBoldIcon
            circular
            icon={<GIMenuAltVertical />}
            size="sm"
          />,
        ]}
        subtitle="Intelligent beings from which we spring bits of moving fluff paroxysm of global death."
      />,
      <Panel.Body key="body-1">{TextBlock}</Panel.Body>,
      <Panel.Footer
        key="footer-1"
        bordered
        helpUrl="https://docs.devo.com/"
        actions={[
          <Button key={1} colorScheme="quiet">
            Cancel
          </Button>,
          <Button key={2} colorScheme="accent">
            Apply
          </Button>,
        ]}
      />,
    ],
    height: '50rem',
    width: '50rem',
  },
};

export const Closable: Story = {
  tags: ['isHidden'],
  render: () =>
    (() => {
      const [closed, setClosed] = React.useState(false);
      return closed ? (
        <Button colorScheme="accent" onClick={() => setClosed(false)}>
          Show the Panel
        </Button>
      ) : (
        <Panel width="36rem">
          <Panel.Header
            bordered
            title="Header tittle"
            closeSettings={{ onClick: () => setClosed(true) }}
          />
          <Panel.Body>{lorem}</Panel.Body>
        </Panel>
      );
    })(),
};

export const WithNavigationContent: Story = {
  args: {
    children: [
      <Panel.Header
        key="header-1"
        title="Header tittle"
        navigationContent={() => {
          const tabsRef = React.useRef<HTMLDivElement>();
          const [activeTab, setActiveTab] = React.useState(0);
          useTabsAccessibility({ activeTab, tabsRef });
          return (
            <Box marginTop="cmp-sm">
              <Tabs size="sm" contained align="bottom">
                <Tabs.List activeTabIndex={activeTab} ref={tabsRef}>
                  <Tabs.Item
                    label="Lookups"
                    onClick={() => setActiveTab(0)}
                    state={activeTab === 0 ? 'selected' : undefined}
                  />
                  <Tabs.Item
                    label="Aggregation tasks"
                    onClick={() => setActiveTab(1)}
                    state={activeTab === 1 ? 'selected' : undefined}
                  />
                  <Tabs.Item
                    label="Aggregations"
                    onClick={() => setActiveTab(2)}
                    state={activeTab === 2 ? 'selected' : undefined}
                  />
                  <Tabs.Item
                    label="Injections"
                    onClick={() => setActiveTab(3)}
                    state={activeTab === 3 ? 'selected' : undefined}
                  />
                </Tabs.List>
              </Tabs>
            </Box>
          );
        }}
      />,
      <Panel.Body key="body-1">{lorem}</Panel.Body>,
      <Panel.Footer
        key="footer-1"
        bordered
        actions={[
          <Button key={1} colorScheme="quiet">
            Cancel
          </Button>,
          <Button key={2} colorScheme="accent">
            Apply
          </Button>,
        ]}
      />,
    ],
  },
};

export const Filterable: Story = {
  tags: ['isHidden'],
  args: {
    width: '48rem',
    height: '40rem',
    children: [
      <Panel.Header
        key={1}
        hasBoxShadow={false}
        title="Header tittle"
        closeSettings={{ onClick: () => alert('Close') }}
      />,
      <Panel.Header key={2} bordered as="div" paddingTop="0">
        <InputControl
          aria-label="Filter items"
          type="search"
          placeholder="Filter items..."
        />
      </Panel.Header>,
      <Panel.Body key={3}>{TextBlock}</Panel.Body>,
    ],
  },
};

export const BackwardNavigation: Story = {
  tags: ['isHidden'],
  render: () =>
    (() => {
      return (
        <HFlex>
          <Panel>
            <Panel.Header
              bordered
              title="Header tittle"
              actions={[
                <Button
                  key="btn-back"
                  hasBoldIcon
                  icon={<GIArrowLeft />}
                  colorScheme="quiet"
                  size="sm"
                >
                  Previous
                </Button>,
              ]}
            />
            <Panel.Body>{TextBlockSM}</Panel.Body>,
          </Panel>
          <Panel>
            <Panel.Header
              bordered
              prependContent={
                <Box marginRight="cmp-xs">
                  <IconButton size="sm" icon={<GIArrowLeft />} />
                </Box>
              }
              title="Header tittle"
            />
            <Panel.Body>{TextBlockSM}</Panel.Body>,
          </Panel>
        </HFlex>
      );
    })(),
};

export const OnlyContent: Story = {
  tags: ['isHidden'],
  args: {
    width: '36rem',
    elevation: 'activated',
    children: [<Panel.Body key="body-3">{TextBlockSM}</Panel.Body>],
  },
};

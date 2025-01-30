import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import {
  GICopy,
  GIErrorWarningAlertAttention,
  GIExpandMoveWindowFullScreen,
  GIMenuAltVertical,
} from '@devoinc/genesys-icons';
import { IconButton } from '../../../IconButton';
import { PanelHeader } from './PanelHeader';
import { Panel } from '../../Panel';
import { VFlex } from '../../../VFlex';
import { Tag } from '../../../Tag';
import { HFlex } from '../../../HFlex';
import { InputControl } from '../../../InputControl';
import { Box } from '../../../Box';

const meta: Meta<typeof PanelHeader> = {
  title: 'Components/Layout/Panel/Components/PanelHeader',
  component: PanelHeader,
  args: {
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof PanelHeader>;

export const Playground: Story = {
  args: {
    title: 'Header title',
  },
};

export const Complex: Story = {
  tags: ['isHidden'],
  args: {
    actions: [
      <IconButton
        colorScheme="quiet"
        size="sm"
        key={1}
        icon={<GIMenuAltVertical />}
      />,
    ],
    closeSettings: {
      tooltip: 'Close the header',
      onClick: () => alert('Close!'),
    },
    title: 'Header title',
    subtitle: 'Subtitle',
    icon: <GIErrorWarningAlertAttention />,
    helpUrl: 'http://devo.com',
    bordered: true,
  },
};

export const Collapsable: Story = {
  tags: ['isHidden'],
  args: {
    bordered: true,
    collapseSettings: {
      onClick: () => alert('Expanded!'),
      tooltip: 'Collapse/Uncollapse header',
    },
    title: 'Header title',
  },
};

export const WithActions: Story = {
  tags: ['isHidden'],
  args: {
    actions: [
      <IconButton colorScheme="quiet" size="sm" key={1} icon={<GICopy />} />,
      <IconButton
        colorScheme="quiet"
        size="sm"
        key={2}
        icon={<GIExpandMoveWindowFullScreen />}
      />,
      <IconButton
        colorScheme="quiet"
        size="sm"
        key={3}
        icon={<GIMenuAltVertical />}
      />,
    ],
    bordered: true,
    title: 'Header title',
  },
};

export const WithLegend: Story = {
  tags: ['isHidden'],
  render: () =>
    (() => {
      return (
        <VFlex>
          <Panel.Header bordered title="Header tittle" legend="Legend" />
          <Panel.Header
            bordered
            title="Header tittle"
            legend={<Tag size="sm" text="NEW" colorScheme="success" />}
          />
        </VFlex>
      );
    })(),
};

export const AppendAndPrepend: Story = {
  tags: ['isHidden'],
  args: {
    title: 'Header title',
    bordered: true,
    appendContent: <Tag size="sm" colorScheme="info" text="appendContent" />,
    prependContent: (
      <Tag size="sm" colorScheme="data-dusk" text="prependContent" />
    ),
  },
};

export const BottomContent: Story = {
  tags: ['isHidden'],
  args: {
    actions: [
      <IconButton colorScheme="quiet" size="sm" key={1} icon={<GICopy />} />,
      <IconButton
        colorScheme="quiet"
        size="sm"
        key={2}
        icon={<GIExpandMoveWindowFullScreen />}
      />,
      <IconButton
        colorScheme="quiet"
        size="sm"
        key={3}
        icon={<GIMenuAltVertical />}
      />,
    ],
    bordered: true,
    title: 'Header title',
    bottomContent: (
      <Box paddingTop="cmp-sm">
        <InputControl aria-label="Filter" placeholder="Filter..." />
      </Box>
    ),
  },
};

export const Help: Story = {
  tags: ['isHidden'],
  args: {
    title: 'Header title',
    bordered: true,
    helpUrl: 'https://docs.devo.com',
    helpTooltip: 'Go to Devo docs',
  },
};

export const Children: Story = {
  tags: ['isHidden'],
  args: {
    children: (
      <HFlex padding="cmp-sm cmp-md" spacing="0">
        <Panel.Header._Icon icon={<GIErrorWarningAlertAttention />} />
        <Panel.Header._Heading title="Header title" />
        <Tag size="sm" colorScheme="data-dusk" text="Shared" />
      </HFlex>
    ),
    padding: '0',
    bordered: true,
  },
};

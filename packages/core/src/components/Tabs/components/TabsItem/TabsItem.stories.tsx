import { Meta, StoryObj } from '@storybook/react';

import { Tabs } from '../../Tabs';
import * as React from 'react';
import { GIChart } from '@devoinc/genesys-icons';
import { Box } from '../../../Box';
import { Badge } from '../../../Badge';
import { TabsItem } from './TabsItem';
import { VFlex } from '../../../VFlex';

const meta: Meta<typeof TabsItem> = {
  title: 'Components/Navigation/Tabs/Components/TabsItem',
  component: TabsItem,
  args: {
    label: 'Tab item',
    size: 'md',
    state: 'enabled',
  },
};

export default meta;
type Story = StoryObj<typeof TabsItem>;

export const Playground: Story = {};

export const WithBadge: Story = {
  tags: ['isHidden'],
  args: {
    icon: <GIChart />,
    label: (
      <>
        Tiny
        <Box position="absolute" positionTop="-0.8rem" positionRight="-0.4rem">
          <Badge size="sm" colorScheme="warning" />
        </Box>
      </>
    ),
  },
};

export const Closable: Story = {
  tags: ['isHidden'],
  args: {
    icon: <GIChart />,
    label: 'Closable tab',
    onClose: () => true,
    closeTooltip: 'Remove this tab',
  },
};

export const Wide: Story = {
  tags: ['isHidden'],
  args: {
    icon: <GIChart />,
    label: 'Wide tab',
    wide: true,
  },
};

export const Sizes: Story = {
  tags: ['isHidden'],
  render: () =>
    (() => {
      return (
        <VFlex childrenFitFullWidth={false}>
          <Tabs.Item icon={<GIChart />} label="Tab size sm" size="sm" />
          <Tabs.Item icon={<GIChart />} label="Tab size md" />
          <Tabs.Item icon={<GIChart />} label="Tab size lg" size="lg" />
        </VFlex>
      );
    })(),
};

export const States: Story = {
  tags: ['isHidden'],
  render: () =>
    (() => {
      return (
        <VFlex childrenFitFullWidth={false}>
          <Tabs.Item icon={<GIChart />} label="Tab state enabled" />
          <Tabs.Item
            icon={<GIChart />}
            label="Tab state selected"
            state="selected"
          />
          <Tabs.Item
            icon={<GIChart />}
            label="Tab state disabled"
            state="disabled"
          />
        </VFlex>
      );
    })(),
};

export const AdvancedUsage: Story = {
  tags: ['isHidden'],
  render: () =>
    (() => {
      return (
        <Tabs.Item._Container>
          <Tabs.Item._Link closable>
            <Tabs.Item._Icon>
              <GIChart />
            </Tabs.Item._Icon>
            Tab content
          </Tabs.Item._Link>
          <Tabs.Item._Close />
        </Tabs.Item._Container>
      );
    })(),
};

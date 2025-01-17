import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { PanelSection } from './PanelSection';
import { Button } from '../Button';
import { TextBlock } from '../Panel/__stories__/helpers';

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

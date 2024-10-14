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

export const Base: Story = {
  args: {
    children: <>{TextBlock}</>,
    title: 'PanelSection title',
  },
};

export let WithScroll: Story;
WithScroll = {
  name: 'With scroll and backward navigation',
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
  argTypes: {
    title: {
      type: 'string',
    },
    subtitle: {
      type: 'string',
    },
    height: {
      type: 'string',
    },
  },
};

export const RemovedSpaceAndScroll: Story = {
  name: 'Scroll and removed space in the content',
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
  name: 'With header actions',
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
  name: 'With footer actions',
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

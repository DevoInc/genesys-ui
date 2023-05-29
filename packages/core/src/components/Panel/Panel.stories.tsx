import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Panel, Button, IconButton, IconButtonClose } from '..';
import { TextBlock } from './__stories__/helpers';

const meta: Meta<typeof Panel> = {
  title: 'Components/Core/Layout/Panel/Examples',
  component: Panel,
  args: {
    elevation: 'raised',
    size: 'md',
  },
};

export default meta;
type Story = StoryObj<typeof Panel>;

export const Base: Story = {
  args: {
    bodySettings: {
      removeSpace: false,
    },
    footerSettings: {
      actions: [
        <Button
          key={1}
          onClick={() => alert('Cancel click')}
          colorScheme="quiet"
        >
          Cancel
        </Button>,
        <Button
          key={2}
          onClick={() => alert('Apply click')}
          colorScheme="accent"
        >
          Apply
        </Button>,
      ],
      bordered: false,
      hasBoxShadow: true,
    },
    headerSettings: {
      actions: [
        <IconButton
          key="btn-1"
          hasBoldIcon
          circular
          icon="gi-heart_full"
          onClick={() => alert('Clicked!')}
          size="sm"
        />,
      ],
      bordered: false,
      hasBoxShadow: true,
    },
    heightScheme: { height: '50rem' },
    helpUrl: 'https://docs.devo.com/confluence/ndt',
    icon: 'gi-chart_flame',
    subtitle:
      'Intelligent beings from which we spring bits of moving fluff paroxysm of global death.',
    title: 'Intelligent beings',
    widthScheme: { width: '50rem' },
    children: TextBlock,
  },
};

export const ClosableBackwardNavigation: Story = {
  args: {
    bodySettings: {
      removeSpace: false,
    },
    footerSettings: {
      actions: [
        <Button key="btn-1" onClick={() => alert('Cancel click')}>
          Cancel
        </Button>,
        <Button
          key="btn-2"
          colorScheme="accent"
          onClick={() => alert('Apply click')}
        >
          Apply
        </Button>,
      ],
      bordered: false,
      hasBoxShadow: true,
    },
    headerSettings: {
      actions: [
        <IconButton
          key="btn-back"
          hasBoldIcon
          circular
          icon="gi-arrow_left1"
          onClick={() => alert('Close Panel!')}
          colorScheme="quiet"
          size="sm"
        />,
        <IconButtonClose
          key="btn-close"
          onClick={() => alert('Back to previous Panel!')}
          tooltip="Back to previous Panel"
        />,
      ],
      bordered: false,
      hasBoxShadow: true,
    },
    icon: null,
    widthScheme: { width: '36rem' },
    children: TextBlock,
    title: 'Intelligent beings',
  },
};

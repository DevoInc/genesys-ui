import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Panel, Button, IconButton } from '..';
import { TextBlock } from './__stories__/helpers';

const meta: Meta<typeof Panel> = {
  title: 'Components/Core/Layout/Panel',
  component: Panel,
  args: {
    elevation: 'raised',
    size: 'md',
    status: 'base',
  },
};

export default meta;
type Story = StoryObj<typeof Panel>;

export const Base: Story = {
  args: {
    contentSettings: {
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
      hasShadowStyle: true,
    },
    headerSettings: {
      actions: [
        <IconButton
          key="btn-1"
          hasBoldIcon
          circular
          icon="heart_full"
          onClick={() => alert('Clicked!')}
          size="sm"
        />,
      ],
      bordered: false,
      hasShadowStyle: true,
    },
    heightScheme: { height: '50rem' },
    helpUrl: 'https://docs.devo.com/confluence/ndt',
    icon: 'chart_flame',
    subtitle:
      'Intelligent beings from which we spring bits of moving fluff paroxysm of global death.',
    title: 'Intelligent beings',
    widthScheme: { width: '50rem' },
    children: TextBlock,
  },
};

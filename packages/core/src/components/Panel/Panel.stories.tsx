import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import {
  Panel,
  Button,
  HFlex,
  FlexItem,
  IconButton,
  IconButtonClose,
} from '..';
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

export const ClosableBackwardNavigation: Story = {
  args: {
    contentSettings: {
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
      hasShadowStyle: true,
    },
    headerSettings: {
      renderContent: {
        append: (
          <HFlex spacing="cmp-xxs" alignItems="center">
            <FlexItem>
              <IconButton
                hasBoldIcon
                circular
                icon="arrow_left1"
                onClick={() => alert('Close Panel!')}
                colorScheme="quiet"
                size="sm"
              />
            </FlexItem>
            <FlexItem>
              <IconButtonClose
                onClick={() => alert('Back to previous Panel!')}
                title="Back to previous Panel"
              />
            </FlexItem>
          </HFlex>
        ),
      },
      bordered: false,
      hasShadowStyle: true,
    },
    icon: null,
    widthScheme: { width: '36rem' },
    children: TextBlock,
  },
};

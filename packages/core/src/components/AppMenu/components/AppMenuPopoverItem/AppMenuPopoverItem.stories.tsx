import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react-vite';

import {
  GIAlerts,
  GIWindowNewExternFullScreenMaximize,
} from '@devoinc/genesys-icons';
import { IconButton } from '../../../IconButton';
import { AppMenu } from '../../AppMenu';

const meta: Meta<typeof AppMenu.PopoverItem> = {
  title: 'Components/Navigation/AppMenu/Components/AppMenuPopoverItem',
  component: AppMenu.PopoverItem,
  args: {
    label: 'This is an AppMenu popover item',
  },
};

export default meta;
type Story = StoryObj<typeof AppMenu.PopoverItem>;

export const Playground: Story = {};

export const SimpleWithActions: Story = {
  tags: ['isHidden'],
  args: {
    actions: [
      <IconButton
        key="popover-actions"
        colorScheme="quiet"
        href="#"
        icon={<GIWindowNewExternFullScreenMaximize />}
        size="xs"
        target="_blank"
        tooltip="Open in a new browser tab"
      />,
    ],
  },
};

export const WithDescription: Story = {
  tags: ['isHidden'],
  args: {
    description:
      'This is a description for the AppMenu popover item which is an auxiliary text.',
    icon: <GIAlerts />,
    featuredIcon: true,
    actions: [
      <IconButton
        key="popover-actions"
        icon={<GIWindowNewExternFullScreenMaximize />}
        size="xs"
        colorScheme="quiet"
        href="#"
        target="_blank"
        tooltip="Open in a new browser tab"
      />,
    ],
  },
};

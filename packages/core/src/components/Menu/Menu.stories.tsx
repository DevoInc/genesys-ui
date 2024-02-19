import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Menu } from './';
import {
  GIBinTrashRecycleDeleteGarbageEmpty,
  GICalendarMonthDayPlannerEvents,
  GIDownload,
  GIExpandRows,
  GINetworkConnectionComputerFolder,
  GIPasteClipboard,
  GIPencilEdit,
  GIPinBookmark,
  GISettingsGearPreferences,
  GITagPriceSale,
  GIToBack,
  GIUsersProfileGroupTwoShareSolid,
} from '@devoinc/genesys-icons';

const meta: Meta<typeof Menu> = {
  title: 'Components/Navigation/Menu',
  component: Menu,
  subcomponents: {
    Heading: Menu.Heading,
    Item: Menu.Item,
    Separator: Menu.Separator,
  },
  args: {
    cmpRole: 'menu',
  },
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Base: Story = {
  args: {
    children: [
      <Menu.Item key={1} icon={<GIToBack />} label="Open in a new tab" />,
      <Menu.Item
        key={2}
        icon={<GINetworkConnectionComputerFolder />}
        label="Network manager"
      />,
      <Menu.Item key={3} icon={<GIPinBookmark />} label="Set as default" />,
      <Menu.Item key={4} icon={<GITagPriceSale />} label="Manage user tags" />,
      <Menu.Separator key={5} />,
      <Menu.Item key={6} icon={<GIDownload />} label="Export to PDF" />,
      <Menu.Item
        key={7}
        icon={<GICalendarMonthDayPlannerEvents />}
        label="Add scheduled report"
      />,
      <Menu.Separator key={8} />,
      <Menu.Item key={9} label="Make Activeboard visible" />,
      <Menu.Item
        key={10}
        icon={<GIUsersProfileGroupTwoShareSolid />}
        label="Share with roles"
        state="disabled"
      />,
      <Menu.Separator key={11} />,
      <Menu.Item
        key={12}
        icon={<GIPencilEdit />}
        label="Edit details"
        expandable
      />,
      <Menu.Item
        key={13}
        icon={<GISettingsGearPreferences />}
        label="Edit raw configuration"
      />,
      <Menu.Item
        key={14}
        icon={<GIPasteClipboard />}
        label="Paste widget"
        state="disabled"
      />,
      <Menu.Separator key={15} />,
      <Menu.Item key={16} icon={<GIExpandRows />} label="Clone" />,
      <Menu.Item
        key={17}
        icon={<GIBinTrashRecycleDeleteGarbageEmpty />}
        label="Delete"
        state="deleted"
      />,
    ],
  },
};

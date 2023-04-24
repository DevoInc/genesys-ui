import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Menu } from './';

const meta: Meta<typeof Menu> = {
  title: 'Components/Core/Navigation/Menu',
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
  render: () => (
    <Menu>
      <Menu.Item icon="to_back" label="Open in a new tab" />
      <Menu.Item
        icon="network_connection_computer_folder"
        label="Network manager"
      />
      <Menu.Item icon="pin_bookmark_solid" label="Set as default" />
      <Menu.Item icon="tag_price_sale" label="Manage user tags" />
      <Menu.Separator />
      <Menu.Item icon="download_file" label="Export to PDF" />
      <Menu.Item
        icon="calendar_month_day_planner_events2"
        label="Add scheduled report"
      />
      <Menu.Separator />
      <Menu.Item label="Make Activeboard visible" selectionScheme="multiple" />
      <Menu.Item
        icon="users_profile_group_two_share_solid"
        label="Share with roles"
        state="disabled"
      />
      <Menu.Separator />
      <Menu.Item icon="compose_write_pencil_new" label="Edit details" />
      <Menu.Item
        icon="settings_gear_preferences"
        label="Edit raw configuration"
      />
      <Menu.Item icon="paste_clipboard" label="Paste widget" state="disabled" />
      <Menu.Separator />
      <Menu.Item icon="expand_rows" label="Clone" />
      <Menu.Item
        icon="bin_trash_recycle_delete_garbage_empty"
        label="Delete"
        state="deleted"
      />
    </Menu>
  ),
};

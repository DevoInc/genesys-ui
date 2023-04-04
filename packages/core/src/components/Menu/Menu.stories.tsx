import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Menu, MenuHeading, MenuItem, MenuSeparator } from './';

const meta: Meta<typeof Menu> = {
  title: 'Components/Core/Navigation/Menu',
  component: Menu,
  subcomponents: { MenuHeading, MenuItem, MenuSeparator },
  args: {
    cmpRole: 'menu',
  },
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Base: Story = {
  args: {
    children: (
      <>
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
        <Menu.Item
          label="Make Activeboard visible"
          selectionScheme="multiple"
        />
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
        <Menu.Item
          icon="paste_clipboard"
          label="Paste widget"
          state="disabled"
        />
        <Menu.Separator />
        <Menu.Item icon="expand_rows" label="Clone" />
        <Menu.Item
          icon="bin_trash_recycle_delete_garbage_empty"
          label="Delete"
          state="deleted"
        />
      </>
    ),
  },
  render: (args) =>
    ((args) => {
      return <Menu {...args} />;
    })(args),
};

export const Selectable: Story = {
  render: () =>
    (() => {
      const [selected, setSelected] = React.useState('one');
      const onOptionChange = (e) => {
        const target = e.target;
        if (target.checked) {
          setSelected(target.value);
        }
      };
      return (
        <Menu>
          <Menu.Item
            label="Option one"
            selectionScheme="single"
            onChange={onOptionChange}
            state={selected === 'one' ? 'selected' : 'enabled'}
            name="options"
            value="one"
          />
          <Menu.Item
            label="Option two"
            selectionScheme="single"
            onChange={onOptionChange}
            state={selected === 'two' ? 'selected' : 'enabled'}
            name="options"
            value="two"
          />
          <Menu.Item
            label="Option three"
            selectionScheme="single"
            onChange={onOptionChange}
            state={selected === 'three' ? 'selected' : 'enabled'}
            name="options"
            value="three"
          />
        </Menu>
      );
    })(),
};

export const AsNavigation: Story = {
  render: () => (
    <Menu cmpRole="nav">
      <Menu.Heading>Platform</Menu.Heading>
      <Menu.Item
        href="https://www.devo.com/applications/cloud-siem/"
        label="Security Operations"
        target="_blank"
      />
      <Menu.Item
        href="https://www.devo.com/applications/soar/"
        label="SOAR"
        target="_blank"
      />
      <Menu.Item
        href="https://www.devo.com/applications/behavior-analytics/"
        label="Behavior Analytics"
        target="_blank"
      />
      <Menu.Item
        href="https://www.devo.com/applications/service-operations/"
        label="Service Operations"
        target="_blank"
      />
      <Menu.Item
        href="https://www.devo.com/applications/deeptrace/"
        label="DeepTrace"
        target="_blank"
      />
      <Menu.Heading>Use cases</Menu.Heading>
      <Menu.Item
        href="https://www.devo.com/solutions/security/"
        label="Security"
        target="_blank"
      />
      <Menu.Item
        href="https://www.devo.com/solutions/it/"
        label="IT Operations"
        target="_blank"
      />
    </Menu>
  ),
};

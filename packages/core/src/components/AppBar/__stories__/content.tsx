import * as React from 'react';

import { Button } from '../../Button';
import { IconButton } from '../../IconButton';
import { Divider } from '../../Divider';
import { Tabs, TabsItemProps } from '../../Tabs';
import { STATUS_ICON_MAP } from '../../../constants';

export const mainActions = [
  <IconButton
    aria-label="avatar"
    tooltip="Avatar"
    key={1}
    icon="gi-user_profile_avatar_man_male2"
    circular
    colorScheme="quiet"
  />,
  <IconButton
    aria-label="Search"
    tooltip="Search"
    key={2}
    icon="gi-search_thicker"
    circular
    colorScheme="quiet"
  />,
  <IconButton
    aria-label="Notifications"
    tooltip="Notifications"
    key={3}
    icon="gi-bell_solid"
    circular
    colorScheme="quiet"
  />,
  <IconButton
    aria-label="Help"
    tooltip="Help"
    key={4}
    icon={STATUS_ICON_MAP.filled.help}
    circular
    colorScheme="quiet"
  />,
  <IconButton
    aria-label="Time zone"
    tooltip="Time zone"
    key={5}
    icon="gi-time_zone"
    circular
    colorScheme="quiet"
  />,
];

export const userOptions = [
  <Button key={1} icon="gi-user_profile_avatar_man_male2">
    Preferences
  </Button>,
  <Button key={2} icon="gi-folder_documents_revert_history">
    History
  </Button>,
  <Button key={3} icon="gi-settings_gear_preferences_strong">
    Other
  </Button>,
  <Divider key={4} vertical />,
  <Button key={5} icon="gi-power_on_off">
    Logout
  </Button>,
];

export const tabs: React.ReactElement<TabsItemProps>[] = [
  <Tabs.Item
    size="lg"
    state="selected"
    key="item-1"
    label="Aggregation tasks"
  />,
  <Tabs.Item size="lg" key="item-4" label="Injections" />,
  <Tabs.Item size="lg" key="item-3" label="Permalinks" />,
];

export const customBlock = (
  <div style={{ backgroundColor: 'lightblue', padding: '1.6rem' }}>
    Custom Content
  </div>
);

import * as React from 'react';

import { Button } from '../../Button';
import { IconButton } from '../../IconButton';
import { Divider } from '../../Divider';

export const mainActions = [
  <IconButton
    key={1}
    icon="user_profile_avatar_man_male2"
    circular
    colorScheme="quiet"
  />,
  <IconButton key={2} icon="search_thicker" circular colorScheme="quiet" />,
  <IconButton key={3} icon="bell_solid" circular colorScheme="quiet" />,
  <IconButton
    key={4}
    icon="about_question_faq_help_filled"
    circular
    colorScheme="quiet"
  />,
  <IconButton key={5} icon="time_zone" circular colorScheme="quiet" />,
];

export const userOptions = [
  <Button key={1} icon="user_profile_avatar_man_male2">
    Preferences
  </Button>,
  <Button key={2} icon="folder_documents_revert_history">
    History
  </Button>,
  <Button key={3} icon="settings_gear_preferences_strong">
    Other
  </Button>,
  <Divider key={4} vertical />,
  <Button key={5} icon="power_on_off">
    Logout
  </Button>,
];

export const tabs = [
  { label: 'Aggregation tasks' },
  { label: 'Injections' },
  { label: 'Permalinks' },
  { label: 'API & Odata feed' },
];

export const customBlock = (
  <div style={{ backgroundColor: 'lightblue', padding: '1.6rem' }}>
    Custom Content
  </div>
);

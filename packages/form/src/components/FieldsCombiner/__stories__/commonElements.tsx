import * as React from 'react';

import {
  Button,
  IconButton,
  InputControl,
  SelectControl,
  CheckboxControl,
  Popper,
  Panel,
  Menu,
} from '@devoinc/genesys-ui';

export const ElemButton = <Button colorScheme={'accent'}>Send</Button>;

export const ElemIconButton = (
  <IconButton
    colorScheme="accent"
    tooltip="Refresh"
    icon="gi-reload_refresh_update"
  />
);

export const ElemIconButtonDropdown = (
  <IconButton
    tooltip="Open options"
    colorScheme={'accent'}
    icon="gi-angle_down"
  />
);

export const ElemPopper = (
  <Popper trigger={ElemIconButtonDropdown} placement="bottom-start">
    <Panel
      elevation="activated"
      bodySettings={{ removeSpace: true }}
      width="24rem"
    >
      <Menu padding="cmp-xxs">
        <Menu.Item
          label="Schedule send"
          icon="gi-calendar_month_day_planner_events"
        />
        <Menu.Item
          label="Send to all the domain users"
          icon="gi-user_profile_successful_check_verified"
        />
        <Menu.Item label="Send to all" icon="gi-user_profile_avatar_man_male" />
      </Menu>
    </Panel>
  </Popper>
);

export const ElemCheckbox = <CheckboxControl aria-label="Maintain activated" />;

export const ElemSelect = (
  <SelectControl
    id="test-2"
    size="sm"
    options={[
      { value: 1, label: 'One' },
      { value: 2, label: 'Two' },
    ]}
  />
);

export const ElemInputControl = (
  <InputControl.Input
    id="test-3"
    aria-label="Label for story"
    onChange={() => console.log('change')}
  />
);

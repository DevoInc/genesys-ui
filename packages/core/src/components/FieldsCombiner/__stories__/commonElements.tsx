import * as React from 'react';

import { Popover } from '../../Popover';
import { Menu } from '../../Menu';
import { FieldsCombiner } from '../FieldsCombiner';
import {
  GIAngleDown,
  GICalendarMonthDayPlannerEvents,
  GIReloadRefreshUpdate,
  GIUserProfileAvatarManMale,
  GIUserProfileSuccessfulCheckVerified,
} from '@devoinc/genesys-icons';

export const ElemButton = (
  <FieldsCombiner.Button colorScheme={'accent'}>Send</FieldsCombiner.Button>
);

export const ElemIconButton = (
  <FieldsCombiner.IconButton
    colorScheme="accent"
    tooltip="Refresh"
    icon={<GIReloadRefreshUpdate />}
  />
);

export const ElemIconButtonDropdown = (
  <FieldsCombiner.IconButton
    colorScheme="accent"
    tooltip="Open options"
    icon={<GIAngleDown />}
  />
);

export const ElemPopover = (
  <Popover id="popover" placement="bottom-start">
    {({ isOpened, ref, toggle }) => (
      <FieldsCombiner.IconButton
        aria-controls="popover"
        aria-expanded={isOpened}
        aria-haspopup={true}
        onClick={toggle}
        ref={ref}
        state={isOpened ? 'expanded' : undefined}
        tooltip="Open options"
        colorScheme={'accent'}
        icon={<GIAngleDown />}
      />
    )}
    <Popover.Panel>
      <Menu>
        <Menu.Item
          label="Schedule send"
          icon={<GICalendarMonthDayPlannerEvents />}
        />
        <Menu.Item
          label="Send to all the domain users"
          icon={<GIUserProfileSuccessfulCheckVerified />}
        />
        <Menu.Item label="Send to all" icon={<GIUserProfileAvatarManMale />} />
      </Menu>
    </Popover.Panel>
  </Popover>
);

export const ElemCheckbox = (
  <FieldsCombiner.Checkbox aria-label="Maintain activated" />
);

export const ElemSelect = (
  <FieldsCombiner.Select
    id="test-2"
    options={[
      { value: 1, label: 'JS' },
      { value: 2, label: 'Typescript' },
    ]}
  />
);

export const ElemSelectCustomWidth = (
  <FieldsCombiner.Select
    id="test-2"
    options={[
      { value: 1, label: 'JS' },
      { value: 2, label: 'Typescript' },
    ]}
    width="30%"
  />
);

export const ElemInputControl = (
  <FieldsCombiner.Input
    id="test-3"
    aria-label="Label for story"
    onChange={() => {
      // eslint-disable-next-line no-console
      console.log('change');
    }}
  />
);

export const ElemInputControlCustomWidth = (
  <FieldsCombiner.Input
    id="test-3"
    aria-label="Label for story"
    onChange={() => {
      // eslint-disable-next-line no-console
      console.log('change');
    }}
    width="70%"
  />
);

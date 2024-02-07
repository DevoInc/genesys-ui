import * as React from 'react';
import {
  GIAboutQuestionFaqHelp,
  GIBellRingerAlarmSound,
  GISearchFindZoom,
} from '@devoinc/genesys-icons';

import { IconButton, IconButtonProps } from '../../IconButton';
import { Tabs, TabsItemProps } from '../../Tabs';
import { ButtonGroup } from '../../ButtonGroup';

export const mainActions = (size: IconButtonProps['size'] = 'xs') => (
  <ButtonGroup marginLeft="auto">
    <IconButton key="actions-01" size={size} colorScheme="quiet" circular>
      <GISearchFindZoom size="1.8rem" style={{ position: 'relative' }} />
    </IconButton>
    <IconButton key="actions-02" size={size} colorScheme="quiet" circular>
      <GIBellRingerAlarmSound size="1.8rem" style={{ position: 'relative' }} />
    </IconButton>
    <IconButton key="actions-03" size={size} colorScheme="quiet" circular>
      <GIAboutQuestionFaqHelp size="2.2rem" style={{ position: 'relative' }} />
    </IconButton>
  </ButtonGroup>
);

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

import * as React from 'react';
import {
  GIAboutQuestionFaqHelp,
  GIBellRingerAlarmSound,
  GISearchFindZoom,
} from '@devoinc/genesys-icons';

import { IconButton, type IconButtonProps } from '../../IconButton';
import { Tabs, useTabsAccessibility } from '../../Tabs';
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

export const TabsCmp = () => {
  const tabsRef = React.useRef<HTMLDivElement>();
  const [activeTab, setActiveTab] = React.useState(0);
  useTabsAccessibility({ activeTab, tabsRef });
  return (
    <Tabs colorScheme="primary">
      <Tabs.List activeTabIndex={activeTab} ref={tabsRef}>
        <Tabs.Item
          key="1"
          label="Item 1"
          onClick={() => setActiveTab(0)}
          size="lg"
          state={activeTab === 0 ? 'selected' : undefined}
        />
        <Tabs.Item
          key="2"
          onClick={() => setActiveTab(1)}
          state={activeTab === 1 ? 'selected' : undefined}
          size="lg"
          label="Item 2"
        />
        <Tabs.Item
          key="3"
          onClick={() => setActiveTab(2)}
          state={activeTab === 2 ? 'selected' : undefined}
          size="lg"
          label="Item 3"
        />
      </Tabs.List>
    </Tabs>
  );
};

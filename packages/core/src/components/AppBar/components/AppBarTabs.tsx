import * as React from 'react';

import { AppBarTabsType } from '../declarations';

import { useTabsConfig } from '../../Tabs/hooks/useTabsConfig';

import { FlexItem } from '../../FlexItem';
import { Tabs } from '../../Tabs';

export interface AppBarTabsProps {
  id: string;
  tabs: AppBarTabsType;
}

export const AppBarTabs: React.FC<AppBarTabsProps> = ({ id, tabs }) => {
  const tabsConfig = useTabsConfig({ tabs, size: 'lg' });

  return (
    <FlexItem id={`${id}__tabs`} flex="1 0 auto" paddingLeft="cmp-xs">
      <Tabs aria-label="main-nav" colorScheme="primary" contained={false}>
        {tabsConfig.map(
          (
            {
              href,
              icon,
              label,
              onActionClick,
              onTabClick,
              size,
              state,
              target,
              wide,
            },
            idx
          ) => (
            <Tabs.Item
              key={idx}
              href={href}
              icon={icon}
              label={label}
              onActionClick={onActionClick}
              onTabClick={onTabClick}
              size={size}
              state={state}
              target={target}
              wide={wide}
            />
          )
        )}
      </Tabs>
    </FlexItem>
  );
};

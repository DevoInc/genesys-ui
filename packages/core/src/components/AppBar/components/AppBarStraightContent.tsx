import * as React from 'react';

import { AppBarActionsType, AppBarTabsType } from '../declarations';

import { AppBarActions, AppBarDivider, AppBarHeading, AppBarTabs } from './';

export interface AppBarStraightContentProps {
  id: string;
  mainActions?: AppBarActionsType;
  tabs?: AppBarTabsType;
  title?: string;
}

export const AppBarStraightContent: React.FC<AppBarStraightContentProps> = ({
  id,
  mainActions,
  tabs,
  title,
}) => (
  <>
    {title && <AppBarHeading id={id} title={title} />}
    {title && tabs && <AppBarDivider id={id} />}
    {tabs && <AppBarTabs id={id} tabs={tabs} />}
    {mainActions && <AppBarActions id={id} mainActions={mainActions} />}
  </>
);

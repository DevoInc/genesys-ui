import * as React from 'react';

import { ButtonProps } from '../Button';
import { IconButtonProps } from '../IconButton';
import { TabsItemProps } from '../Tabs';

export type AppBarTabsType = Pick<
  TabsItemProps,
  'label' | 'onActionClick' | 'onTabClick'
>[];

export type AppBarActionsType = (
  | React.ReactElement<ButtonProps>
  | React.ReactElement<IconButtonProps>
)[];

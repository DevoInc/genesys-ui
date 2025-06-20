import * as React from 'react';

import type {
  IDataAttrs,
  IGlobalAriaAttrs,
  IGlobalAttrs,
  IStyledOverloadCss,
} from '../../declarations';
import type { ITabs } from './declarations';
import { TabsContext } from './context';
import {
  TabsAside,
  TabsContainer,
  TabsDivider,
  TabsItem,
  TabsList,
  TabsMark,
} from './components';
import type { Resolve } from '../../typeFunctions';

export interface TabsProps
  extends IGlobalAttrs,
    IGlobalAriaAttrs,
    IDataAttrs,
    IStyledOverloadCss,
    ITabs {
  children?: React.ReactNode;
}

const InternalTabs = React.forwardRef<HTMLDivElement, Resolve<TabsProps>>(
  (
    {
      align = 'middle',
      children = [],
      colorScheme = 'base',
      contained,
      height,
      size = 'md',
      wide,
      ...nativeProps
    },
    ref,
  ) => (
    <TabsContainer
      {...nativeProps}
      contained={contained}
      height={height}
      size={size}
      ref={ref}
    >
      <TabsContext.Provider
        value={{
          align,
          colorScheme,
          size,
          wide,
        }}
      >
        {children}
      </TabsContext.Provider>
    </TabsContainer>
  ),
);

export const Tabs = InternalTabs as typeof InternalTabs & {
  Aside: typeof TabsAside;
  Divider: typeof TabsDivider;
  Item: typeof TabsItem;
  List: typeof TabsList;
  Mark: typeof TabsMark;
};

Tabs.Aside = TabsAside;
Tabs.Divider = TabsDivider;
Tabs.Item = TabsItem;
Tabs.List = TabsList;
Tabs.Mark = TabsMark;

InternalTabs.displayName = 'Tabs';
Tabs.Aside.displayName = 'Tabs.Aside';
Tabs.Divider.displayName = 'Tabs.Divider';
Tabs.Item.displayName = 'Tabs.Item';
Tabs.List.displayName = 'Tabs.List';
Tabs.Mark.displayName = 'Tabs.Mark';

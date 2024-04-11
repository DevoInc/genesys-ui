import * as React from 'react';

import type {
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

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TabsProps
  extends IGlobalAttrs,
    IGlobalAriaAttrs,
    IStyledOverloadCss,
    ITabs {
  children?: React.ReactNode;
}

const InternalTabs = React.forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      children = [],
      colorScheme = 'base',
      contained,
      size = 'md',
      wide,
      ...nativeProps
    },
    ref,
  ) => {
    return (
      <TabsContainer
        {...nativeProps}
        contained={contained}
        ref={ref}
        size={size}
      >
        <TabsContext.Provider
          value={{
            colorScheme,
            size,
            wide,
          }}
        >
          {children}
        </TabsContext.Provider>
      </TabsContainer>
    );
  },
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

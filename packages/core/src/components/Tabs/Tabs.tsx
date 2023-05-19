import * as React from 'react';
import { GlobalAriaProps, GlobalAttrProps } from '../../declarations';

// hooks
import { useWindowSize } from '../../hooks';

// components
import {
  TabsAside,
  TabsContainer,
  TabsContainerProps,
  TabsDivider,
  TabsItem,
  TabsList,
  TabsListProps,
  TabsMark,
  TabsMarkProps,
} from './subcomponents';

export interface TabsProps
  extends Omit<TabsContainerProps, 'children'>,
    TabsListProps,
    TabsMarkProps,
    // native
    GlobalAttrProps,
    GlobalAriaProps {}

const InternalTabs: React.FC<TabsProps> = ({
  children = [],
  colorScheme = 'default',
  contained,
  tooltip,
  ...nativeProps
}) => {
  const [windowWidth] = useWindowSize();

  const navContainerRef = React.useRef<HTMLElement>(null);
  const navTabItemRef = React.useRef<HTMLUListElement>(null);
  const activeMarkRef = React.useRef<HTMLDivElement>(null);

  const roundValues = (val) => Math.ceil(parseFloat(val));

  const tabs = children.reduce((acc, val) => acc.concat(val), []);

  const moveActiveMarkerUnderline = () => {
    const activeTab = tabs.findIndex((tab) => tab.props.state === 'selected');
    const { left: navContainerLeft } =
      navContainerRef.current.getBoundingClientRect();

    const { left: activeTabLeft, width: activeTabWidth } =
      navTabItemRef.current.children[activeTab].getBoundingClientRect();

    activeMarkRef.current.style.width = `${roundValues(activeTabWidth)}px`;
    activeMarkRef.current.style.left = `${roundValues(
      activeTabLeft - navContainerLeft
    )}px`;
  };

  React.useEffect(moveActiveMarkerUnderline, [windowWidth, tabs]);

  return (
    <TabsContainer
      {...nativeProps}
      contained={contained}
      ref={navContainerRef}
      tooltip={tooltip}
    >
      <TabsList ref={navTabItemRef}>{tabs}</TabsList>
      <TabsMark ref={activeMarkRef} colorScheme={colorScheme} />
    </TabsContainer>
  );
};

export const Tabs = InternalTabs as typeof InternalTabs & {
  Aside: typeof TabsAside;
  Container: typeof TabsContainer;
  Divider: typeof TabsDivider;
  Item: typeof TabsItem;
  List: typeof TabsList;
  Mark: typeof TabsMark;
};

Tabs.Aside = TabsAside;
Tabs.Container = TabsContainer;
Tabs.Divider = TabsDivider;
Tabs.Item = TabsItem;
Tabs.List = TabsList;
Tabs.Mark = TabsMark;

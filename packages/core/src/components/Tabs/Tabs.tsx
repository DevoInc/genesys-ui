import * as React from 'react';
import { GlobalAriaProps, GlobalAttrProps } from '../../declarations';

// hooks
import { useWindowSize } from '../../hooks';

// components
import { TabsAside, TabsItem } from './subcomponents';

// styled
import {
  StyledTabs,
  StyledTabsProps,
  StyledTabsContent,
  StyledTabsContentProps,
  StyledTabsMark,
  StyledTabsMarkProps,
} from './styled';

export interface TabsProps
  extends StyledTabsProps,
    StyledTabsMarkProps,
    StyledTabsContentProps,
    // native
    GlobalAttrProps,
    GlobalAriaProps {}

const InternalTabs: React.FC<TabsProps> = ({
  children = [],
  colorScheme = 'default',
  contained,
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
    <StyledTabs {...nativeProps} contained={contained} ref={navContainerRef}>
      <StyledTabsContent ref={navTabItemRef}>{tabs}</StyledTabsContent>
      <StyledTabsMark ref={activeMarkRef} colorScheme={colorScheme} />
    </StyledTabs>
  );
};

export const Tabs: typeof InternalTabs & {
  Aside?: typeof TabsAside;
  Item?: typeof TabsItem;
} = InternalTabs;

Tabs.Item = TabsItem;
Tabs.Aside = TabsAside;

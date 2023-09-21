import * as React from 'react';
import { TabsItemProps } from '../subcomponents';
import { TabsItemSize, TabsItemState } from '../declarations';

export interface UseTabsConfigProps {
  /** Individual TabsItem configuration */
  tabs?: TabsItemProps[];
  /** Initial active TabsItem */
  active?: number;
  iconId?: string;
  /** Common size of TabsItem group */
  size?: TabsItemSize;
  state?: TabsItemState;
  target?: HTMLAnchorElement['target'];
  href?: HTMLAnchorElement['href'];
  wide?: boolean;
}

/**
 * Hook to build a TabsItem list.
 *
 * Given an array of tabs config and common config props,
 * it returns an array of children to be rendered by the TabsContainer.
 * @returns
 */
export const useTabsConfig = ({
  tabs = [],
  active = 0,
  href,
  iconId,
  size = 'md',
  state = 'enabled',
  target,
  wide = false,
}: UseTabsConfigProps): TabsItemProps[] => {
  const [activeTab, setActiveTab] = React.useState(active);

  const buildTabsConfig = () =>
    tabs.map(({ onClick, ...tab }, idx) => {
      const stateEval: TabsItemState = activeTab === idx ? 'selected' : state;
      const tunedOnClick = (e: React.MouseEvent) => {
        setActiveTab(idx);
        onClick?.(e);
      };
      return {
        href,
        iconId,
        onClick: tunedOnClick,
        size,
        state: stateEval,
        target,
        wide,
        ...tab,
      };
    });

  const tabsConfig = React.useMemo(buildTabsConfig, [
    activeTab,
    href,
    iconId,
    size,
    state,
    tabs,
    target,
    wide,
  ]);

  return tabsConfig;
};

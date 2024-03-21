import * as React from 'react';
import { debounce } from '../../../helpers';

/**
 * Hook which defines the position and width of the TabsItem mark.
 *
 * Given the index of the active tab item,
 * it returns the ref of the tab items container and the tabs mark.
 * @returns
 */
export const useTabsMark = ({
  activeTabIndex,
  tabsListRef,
}: {
  activeTabIndex: number;
  tabsListRef: React.MutableRefObject<HTMLDivElement>;
}) => {
  const markRef = React.useRef<HTMLDivElement>();
  const [containerWidth, setContainerWidth] = React.useState(0);

  React.useEffect(() => {
    const activeTab = tabsListRef.current.querySelector(
      '[aria-selected="true"]',
    );
    const { left: navContainerLeft } =
      tabsListRef.current.getBoundingClientRect();

    const { left: activeTabLeft, width: activeTabWidth } =
      activeTab?.getBoundingClientRect() ?? {};

    markRef.current.style.width = `${Math.ceil(activeTabWidth)}px`;
    markRef.current.style.left = `${Math.ceil(
      activeTabLeft - navContainerLeft,
    )}px`;
  }, [activeTabIndex, containerWidth]);

  React.useEffect(() => {
    const ro = new ResizeObserver(
      debounce((entries: ResizeObserverEntry[]) => {
        for (const entry of entries) {
          setContainerWidth(entry.contentRect.width);
        }
      }, 10),
    );
    ro.observe(tabsListRef.current);
    return () => {
      ro.disconnect();
    };
  }, []);

  return { markRef };
};

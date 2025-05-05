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
  tabsRef,
}: {
  activeTabIndex: number;
  tabsRef: React.MutableRefObject<HTMLDivElement>;
}) => {
  const markRef = React.useRef<HTMLDivElement>();
  const [containerWidth, setContainerWidth] = React.useState(0);

  React.useEffect(() => {
    const activeTab = tabsRef?.current?.querySelector('[aria-selected="true"]');
    const { left: navContainerLeft } =
      tabsRef?.current?.getBoundingClientRect() ?? {};

    // For calibrate when the container has scroll
    const navContainerHScroll = tabsRef?.current?.scrollLeft;

    const { left: activeTabLeft, width: activeTabWidth } =
      activeTab?.getBoundingClientRect() ?? {};

    if (markRef.current) {
      markRef.current.style.width = `${Math.ceil(activeTabWidth)}px`;
      // Adjust the mark position based the container postion and scroll
      markRef.current.style.left = `${Math.ceil(
        activeTabLeft - navContainerLeft + navContainerHScroll,
      )}px`;
    }
  }, [activeTabIndex, containerWidth]);

  React.useEffect(() => {
    const ro = new ResizeObserver(
      debounce((entries: ResizeObserverEntry[]) => {
        for (const entry of entries) {
          setContainerWidth(entry.contentRect.width);
        }
      }, 10),
    );
    ro.observe(tabsRef?.current);
    return () => {
      ro.disconnect();
    };
  }, []);

  return { markRef };
};

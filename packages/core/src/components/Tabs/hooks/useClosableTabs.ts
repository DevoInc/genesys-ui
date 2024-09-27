import * as React from 'react';
import { getEnabledItemByIndex } from '../../../helpers/dom';

export const useClosableTabs = ({
  activeTab,
  tabsRef,
  tabsLength,
}: {
  activeTab: number;
  tabsRef: React.MutableRefObject<HTMLDivElement>;
  tabsLength: number;
}) => {
  const itemsRef = React.useRef<NodeListOf<Element>>([]);
  React.useEffect(() => {
    // const removedItemIndex = Array.from(itemsRef.current).findIndex(
    //   (item) => !document.body.contains(item),
    // );
    itemsRef.current = tabsRef.current.querySelectorAll('[aria-selected]');
    if (activeTab > itemsRef.current.length - 1) {
      getEnabledItemByIndex({ items: itemsRef.current, index: 'last' });
    }
  }, [tabsLength]);
  // const onCloseFn = (currentIndex: number) => {
  //   const items = tabsRef.current.querySelectorAll('[aria-selected]');
  //   if (activeTab === currentIndex && currentIndex === items.length - 1) {
  //     getEnabledItemByIncrement({ items, inc: -1 });
  //   }
  //   let nextIndex: number;
  //   const index = items.indexOf(items.find((elem) => elem.id === currentId));
  //   if (index >= 0 && index < items.length - 1) {
  //     nextIndex = index + 1;
  //   } else {
  //     nextIndex = 0;
  //   }
  //   setVisibleTabs(items.filter((elem) => elem.id !== currentId));
  //   if (items.length > 0) {
  //     setActiveTab(nextIndex);
  //   }
  // };
  // return { onCloseFn };
};

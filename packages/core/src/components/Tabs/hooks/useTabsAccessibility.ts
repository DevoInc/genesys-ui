import * as React from 'react';
import { useKeyPress } from 'ahooks';
import {
  getEnabledItemByIncrement,
  getEnabledItemByIndex,
} from '../../../helpers/dom';

export const useTabsAccessibility = ({
  activeTab,
  tabsRef,
}: {
  activeTab: number;
  tabsRef: React.MutableRefObject<HTMLDivElement>;
}) => {
  useKeyPress(
    'leftarrow',
    () => {
      const items = tabsRef.current.querySelectorAll('[aria-selected]');
      const nextEnabledTabItem = getEnabledItemByIncrement({
        items,
        currentItemIndex: activeTab,
        inc: -1,
      });
      nextEnabledTabItem.focus();
      nextEnabledTabItem.click();
    },
    {
      events: ['keydown'],
      target: tabsRef,
    },
  );

  useKeyPress(
    'rightarrow',
    () => {
      const items = tabsRef.current.querySelectorAll('[aria-selected]');
      console.log(items);
      const nextEnabledTabItem = getEnabledItemByIncrement({
        items,
        currentItemIndex: activeTab,
        inc: 1,
      });
      console.log(nextEnabledTabItem);
      nextEnabledTabItem.focus();
      nextEnabledTabItem.click();
    },
    {
      events: ['keydown'],
      target: tabsRef,
    },
  );

  useKeyPress(
    'home',
    () => {
      const items = tabsRef.current.querySelectorAll('[aria-selected]');
      const nextEnabledTabItem = getEnabledItemByIndex({
        items,
        index: 'first',
      });
      nextEnabledTabItem.focus();
      nextEnabledTabItem.click();
    },
    {
      events: ['keydown'],
      target: tabsRef,
    },
  );

  useKeyPress(
    'end',
    () => {
      const items = tabsRef.current.querySelectorAll('[aria-selected]');
      const nextEnabledTabItem = getEnabledItemByIndex({
        items,
        index: 'last',
      });
      nextEnabledTabItem.focus();
      nextEnabledTabItem.click();
    },
    {
      events: ['keydown'],
      target: tabsRef,
    },
  );
};

import * as React from 'react';

import { Flex, type FlexItemProps } from '../../../Flex';
import { Tabs, type TabsItemProps } from '../../../Tabs';

export interface AppBarNavigationProps extends FlexItemProps {
  /** List of Tabs.Item elements. */
  tabs: React.ReactElement<TabsItemProps>[];
}

export const AppBarNavigation: React.FC<AppBarNavigationProps> = ({
  'aria-label': ariaLabel,
  flex = '1 0 auto',
  tabs,
  ...restFlexItemProps
}) => {
  return (
    <Flex.Item {...restFlexItemProps} flex={flex}>
      <Tabs aria-label={ariaLabel} colorScheme="primary" contained={false}>
        {React.Children.map(tabs, (tab) => React.cloneElement(tab))}
      </Tabs>
    </Flex.Item>
  );
};

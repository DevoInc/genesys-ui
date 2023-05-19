import * as React from 'react';

import { Flex, FlexProps } from '../../../Flex';
import { useTheme } from 'styled-components';
import { TabsItemProps } from '../TabsItem';

export interface TabsListProps extends Omit<FlexProps, 'children'> {
  /** Array of TabItems */
  children?: React.ReactElement<TabsItemProps | any>[];
}

export const TabsList = React.forwardRef<HTMLElement, TabsListProps>(
  ({ children, styles, width = '100%', ...restFlexProps }, ref) => {
    const defaultStyles = `margin: 0 -${
      useTheme().cmp.tabs.content.space.padding
    };`;
    return (
      <Flex
        {...restFlexProps}
        as="ul"
        role="tablist"
        ref={ref}
        styles={styles || defaultStyles}
        width={width}
      >
        {children}
      </Flex>
    );
  }
);

TabsList.displayName = 'TabsList';

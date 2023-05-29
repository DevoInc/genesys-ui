import * as React from 'react';
import { useTheme } from 'styled-components';
import { concat } from 'lodash';

import { Flex, FlexProps } from '../../../Flex';
import { TabsItemProps } from '../TabsItem';

export interface TabsListProps extends Omit<FlexProps, 'children'> {
  /** Array of TabItems */
  children?: React.ReactElement<TabsItemProps | any>[];
}

export const TabsList = React.forwardRef<HTMLElement, TabsListProps>(
  ({ children, styles, width = '100%', ...restFlexProps }, ref) => {
    const baseStyles = `margin: 0 -${
      useTheme().cmp.tabs.content.space.padding
    };`;
    return (
      <Flex
        {...restFlexProps}
        as="ul"
        role="tablist"
        ref={ref}
        styles={concat(baseStyles, styles)}
        width={width}
      >
        {children}
      </Flex>
    );
  }
);

TabsList.displayName = 'TabsList';

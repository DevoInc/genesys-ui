import * as React from 'react';
import { useTheme } from 'styled-components';

import { Flex, FlexProps } from '../../../../Flex';
import { TabsItemSize } from '../../../declarations';

export interface TabsItemContainerProps extends Omit<FlexProps, 'size'> {
  /** Sizes options for icon and text */
  size?: TabsItemSize;
  /** Distribute the whole container with between tabs */
  wide?: boolean;
  children?: React.ReactNode;
}

export const TabsItemContainer: React.FC<TabsItemContainerProps> = ({
  alignItems,
  children,
  flex,
  height,
  margin,
  size,
  wide,
  ...restFlexProps
}) => {
  const tokens = useTheme().cmp.tabs;
  return (
    <Flex
      {...restFlexProps}
      inline={!wide}
      flex={wide ? '1' : flex}
      alignItems={alignItems || (size === 'sm' ? 'flex-end' : 'center')}
      height={height || tokens.container.size.height[size]}
      margin={margin || `0 ${tokens.content.space.padding}`}
    >
      {children}
    </Flex>
  );
};

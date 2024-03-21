import * as React from 'react';
import { useTheme } from 'styled-components';

import type { ITabs } from '../../../declarations';
import type { Resolve } from '../../../../../typeFunctions';
import { Flex, type FlexProps } from '../../../../Flex';

export interface TabsItemContainerProps
  extends Omit<FlexProps, 'position' | 'size'>,
    Pick<ITabs, 'size'> {
  /** Distribute the whole container with between tabs */
  wide?: boolean;
  children?: React.ReactNode;
}

export const TabsItemContainer: React.FC<Resolve<TabsItemContainerProps>> = ({
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
      position="relative"
      role="presentation"
    >
      {children}
    </Flex>
  );
};

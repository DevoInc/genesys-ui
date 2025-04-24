import * as React from 'react';
import { useTheme } from 'styled-components';

import type { ITabs } from '../../../../declarations';
import { TABS_ALIGN_FLEX_MAP } from '../constants';
import type { Resolve } from '../../../../../../typeFunctions';
import { Flex, type FlexProps } from '../../../../../Flex';

export interface TabsItemContainerProps
  extends Omit<FlexProps, 'position' | 'size' | 'alignItems'>,
    Pick<ITabs, 'align' | 'size'> {
  /** Distribute the whole container with between tabs */
  wide?: boolean;
  children?: React.ReactNode;
}

export const TabsItemContainer = React.forwardRef<
  HTMLDivElement,
  Resolve<TabsItemContainerProps>
>(
  (
    {
      align = 'middle',
      children,
      flex,
      height,
      margin,
      size = 'md',
      wide,
      ...restFlexProps
    },
    ref,
  ) => {
    const tokens = useTheme().cmp.tabs;
    return (
      <Flex
        {...restFlexProps}
        ref={ref}
        inline={!wide}
        flex={wide ? '1' : flex}
        alignItems={TABS_ALIGN_FLEX_MAP[align]}
        height={height || tokens.container.size.height[size]}
        margin={margin || `0 ${tokens.content.space.padding}`}
        position="relative"
        role="presentation"
      >
        {children}
      </Flex>
    );
  },
);

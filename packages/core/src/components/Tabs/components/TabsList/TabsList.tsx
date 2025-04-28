import * as React from 'react';
import { CSSProp } from 'styled-components';

import type { ITabs } from '../../declarations';
import { useTabsMark } from '../../hooks/useTabsMark';
import { TabsContext } from '../../context';
import { TabsMark } from '../TabsMark';
import { Flex, type FlexProps } from '../../../Flex';
import { Resolve } from '../../../../typeFunctions';
import { Box } from '../../../Box';

export interface TabsListProps extends FlexProps, Pick<ITabs, 'colorScheme'> {
  /** The active tab item index. */
  activeTabIndex?: number;
  /** Specific styles for the tabs mark. */
  customMarkStyles?: CSSProp;
}

export const TabsList = React.forwardRef<
  HTMLDivElement,
  Resolve<TabsListProps>
>(
  (
    {
      activeTabIndex,
      children,
      colorScheme,
      customMarkStyles,
      width = '100%',
      ...restFlexProps
    },
    ref,
  ) => {
    const context = React.useContext(TabsContext);
    const { markRef } = useTabsMark({
      activeTabIndex,
      tabsRef: ref as React.MutableRefObject<HTMLDivElement>,
    });

    return (
      <Box
        position="relative"
        flex="1"
        overflow="auto"
        ref={ref}
        style={`&::-webkit-scrollbar {display: none;}`}
      >
        <Flex {...restFlexProps} role="tablist" width={width}>
          {children}
        </Flex>
        <TabsMark
          ref={markRef}
          colorScheme={colorScheme || context.colorScheme}
          style={customMarkStyles}
        />
      </Box>
    );
  },
);

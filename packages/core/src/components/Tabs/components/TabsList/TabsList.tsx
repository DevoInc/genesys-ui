import * as React from 'react';
import { CSSProp, DefaultTheme } from 'styled-components';

import type { ITabs } from '../../declarations';
import { useTabsMark } from '../../hooks/useTabsMark';
import { TabsContext } from '../../context';
import { TabsMark } from '../TabsMark';
import { Flex, type FlexProps } from '../../../Flex';

export interface TabsListProps extends FlexProps, Pick<ITabs, 'colorScheme'> {
  /** The active tab item index. */
  activeTabIndex?: number;
  /** Specific styles for the tabs mark. */
  customMarkStyles?: CSSProp<DefaultTheme>;
}

export const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
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
      tabsListRef: ref as React.MutableRefObject<HTMLDivElement>,
    });

    return (
      <div style={{ position: 'relative', flex: '1' }} ref={ref}>
        <Flex {...restFlexProps} role="tablist" width={width}>
          {children}
        </Flex>
        <TabsMark
          ref={markRef}
          colorScheme={colorScheme || context.colorScheme}
          styles={customMarkStyles}
        />
      </div>
    );
  },
);

TabsList.displayName = 'TabsList';

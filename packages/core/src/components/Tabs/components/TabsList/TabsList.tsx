import * as React from 'react';
import { CSSProp } from 'styled-components';

import type { ITabs } from '../../declarations';
import { useTabsMark } from '../../hooks/useTabsMark';
import { TabsContext } from '../../context';
import { TabsMark } from '../TabsMark';
import { Flex, type FlexProps } from '../../../Flex';

export interface TabsListProps extends FlexProps, Pick<ITabs, 'colorScheme'> {
  /** The active tab item index. */
  activeTabIndex?: number;
  /** Specific styles for the tabs mark. */
  customMarkStyles?: CSSProp;
  ref?: React.Ref<HTMLDivElement>;
}

export const TabsList: React.FC<TabsListProps> = ({
  activeTabIndex,
  children,
  colorScheme,
  customMarkStyles,
  width = '100%',
  ref,
  ...restFlexProps
}) => {
  const context = React.useContext(TabsContext);
  const { markRef } = useTabsMark({
    activeTabIndex,
    tabsRef: ref as React.MutableRefObject<HTMLDivElement>,
  });

  return (
    <div style={{ position: 'relative', flex: '1' }} ref={ref}>
      <Flex {...restFlexProps} role="tablist" width={width}>
        {children}
      </Flex>
      <TabsMark
        ref={markRef}
        colorScheme={colorScheme || context.colorScheme}
        style={customMarkStyles}
      />
    </div>
  );
};

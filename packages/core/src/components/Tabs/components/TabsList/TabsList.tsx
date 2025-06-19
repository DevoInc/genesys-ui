import * as React from 'react';
import { CSSProp } from 'styled-components';

import type { ITabs } from '../../declarations';
import { useTabsMark } from '../../hooks/useTabsMark';
import { TabsContext } from '../../context';
import { TabsMark } from '../TabsMark';
import { Flex, type FlexProps } from '../../../Flex';
import { Resolve } from '../../../../typeFunctions';
import { Box } from '../../../Box';
import { mergeStyles } from '../../../../helpers';

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
      alignContent,
      alignItems = 'center',
      children,
      childrenFlex,
      colorScheme,
      columnGap,
      customMarkStyles,
      flex = '1',
      flexDirection,
      flexWrap,
      gap,
      height = '100%',
      inline,
      justifyContent,
      overflow = 'auto',
      position = 'relative',
      rowGap,
      style,
      width = '100%',
      ...restProps
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
        {...restProps}
        position={position}
        flex={flex}
        height={height}
        overflow={overflow}
        ref={ref}
        style={mergeStyles(`&::-webkit-scrollbar {display: none;}`, style)}
        width={width}
      >
        <Flex
          alignContent={alignContent}
          alignItems={alignItems}
          childrenFlex={childrenFlex}
          columnGap={columnGap}
          flexDirection={flexDirection}
          flexWrap={flexWrap}
          gap={gap}
          height="100%"
          inline={inline}
          justifyContent={justifyContent}
          role="tablist"
          rowGap={rowGap}
          width="100%"
        >
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

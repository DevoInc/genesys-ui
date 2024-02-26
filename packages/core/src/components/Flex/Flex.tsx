import * as React from 'react';
import { concat } from 'lodash';
import { useTheme } from 'styled-components';

import type { ILayoutFlexCss } from '../../declarations';
import type { Resolve } from '../../typeFunctions';

import { flexMixin } from './mixins';

import { Box, BoxProps } from '../Box';
import { FlexItem } from './components';

export interface FlexProps extends BoxProps, ILayoutFlexCss {}

const InternalFlex = React.forwardRef<HTMLElement, Resolve<FlexProps>>(
  (
    {
      alignContent,
      alignItems,
      childrenFlex,
      columnGap,
      flex,
      flexDirection,
      flexWrap,
      gap,
      justifyContent,
      inline = false,
      rowGap,
      children,
      styles,
      ...restBoxProps
    },
    ref,
  ) => {
    const theme = useTheme();
    return (
      <Box
        {...restBoxProps}
        ref={ref}
        styles={concat(
          flexMixin({
            alignContent,
            alignItems,
            childrenFlex,
            columnGap,
            flex,
            flexDirection,
            flexWrap,
            gap,
            justifyContent,
            inline,
            rowGap,
            theme,
          }),
          styles,
        )}
      >
        {children}
      </Box>
    );
  },
);

export const Flex = InternalFlex as typeof InternalFlex & {
  Item: typeof FlexItem;
};

Flex.Item = FlexItem;

InternalFlex.displayName = 'Flex';
Flex.Item.displayName = 'Flex.Item';

import * as React from 'react';
import { useTheme } from 'styled-components';

import type { ILayoutFlexCss } from '../../declarations';
import type { Resolve } from '../../typeFunctions';
import { flexMixin } from './mixins';
import { Box, type BoxProps } from '../Box';
import { FlexItem } from './components';
import { mergeStyles } from '../../helpers';

export interface FlexProps extends BoxProps, ILayoutFlexCss {}

const InternalFlex: React.FC<Resolve<FlexProps>> = ({
  alignContent,
  alignItems,
  childrenFlex,
  columnGap,
  display,
  flex,
  flexDirection,
  flexWrap,
  gap,
  justifyContent,
  inline = false,
  rowGap,
  children,
  style,
  ...restBoxProps
}) => {
  const theme = useTheme();
  return (
    <Box
      {...restBoxProps}
      style={mergeStyles(
        flexMixin({
          alignContent,
          alignItems,
          childrenFlex,
          columnGap,
          display,
          flex,
          flexDirection,
          flexWrap,
          gap,
          justifyContent,
          inline,
          rowGap,
          theme,
        }),
        style,
      )}
    >
      {children}
    </Box>
  );
};

export const Flex = InternalFlex as typeof InternalFlex & {
  Item: typeof FlexItem;
};

Flex.Item = FlexItem;

InternalFlex.displayName = 'Flex';
Flex.Item.displayName = 'Flex.Item';

import * as React from 'react';

import type { ILayoutFlexItem } from '../../../../declarations';
import type { Resolve } from '../../../../typeFunctions';
import { Box, type BoxProps } from '../../../Box';
import { mergeStyles } from '../../../../helpers';

export interface FlexItemProps extends BoxProps, ILayoutFlexItem {}

export const FlexItem: React.FC<Resolve<FlexItemProps>> = ({
  children,
  style,
  order,
  ...restBoxProps
}) => {
  return (
    <Box
      {...restBoxProps}
      style={mergeStyles(order ? `order: ${order};` : [], style)}
    >
      {children}
    </Box>
  );
};

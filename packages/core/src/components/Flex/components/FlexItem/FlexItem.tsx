import * as React from 'react';

import type { ILayoutFlexItem } from '../../../../declarations';
import type { Resolve } from '../../../../typeFunctions';
import { mergeStyles } from '../../../../helpers';
import { Flex, type FlexProps } from '../../Flex';

export interface FlexItemProps extends FlexProps, ILayoutFlexItem {}

export const FlexItem: React.FC<Resolve<FlexItemProps>> = ({
  children,
  display = 'block',
  style,
  order,
  ...restFlexProps
}) => {
  return (
    <Flex
      {...restFlexProps}
      display={display}
      style={mergeStyles(order ? `order: ${order};` : [], style)}
    >
      {children}
    </Flex>
  );
};

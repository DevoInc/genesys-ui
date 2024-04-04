import * as React from 'react';
import { concat } from 'lodash';

import { type ILayoutFlexItem } from '../../../../declarations';
import { type Resolve } from '../../../../typeFunctions';

import { Box, type BoxProps } from '../../../Box';

export interface FlexItemProps extends BoxProps, ILayoutFlexItem {}

export const FlexItem: React.FC<Resolve<FlexItemProps>> = ({
  children,
  styles,
  order,
  ...restBoxProps
}) => {
  return (
    <Box {...restBoxProps} styles={concat(`order: ${order};`, styles)}>
      {children}
    </Box>
  );
};

import * as React from 'react';

import { GlobalSpacing } from '../../declarations';
import { Flex, FlexProps } from '../Flex';
import { FlexItem } from '../Flex/components';

export interface VFlexProps
  extends Omit<FlexProps, 'flexDirection' | 'gap' | 'columnGap' | 'rowGap'> {
  /** Vertical spacing between children items (row-gap). */
  spacing?: GlobalSpacing;
  /** If the children fit full height of the VFlex parent. Firstly you should assign to the VFlex a bigger height than the one defined by its children. */
  childrenFitFullHeight?: boolean;
}

const InternalVFlex: React.FC<VFlexProps> = ({
  alignItems = 'stretch',
  children,
  childrenFlex,
  childrenFitFullHeight = false,
  justifyContent = 'flex-start',
  spacing = 'cmp-md',
  ...flexProps
}) => (
  <Flex
    {...flexProps}
    alignItems={alignItems}
    childrenFlex={childrenFlex || (childrenFitFullHeight ? '1' : undefined)}
    flexDirection="column"
    justifyContent={justifyContent}
    rowGap={spacing}
  >
    {children}
  </Flex>
);

export const VFlex = InternalVFlex as typeof InternalVFlex & {
  Item: typeof FlexItem;
};

VFlex.Item = FlexItem;

InternalVFlex.displayName = 'VFlex';

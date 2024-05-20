import * as React from 'react';

import type { TGlobalSpacing } from '../../declarations';
import { Flex, type FlexProps } from '../Flex';
import { VFlexItem } from './components';

export interface VFlexProps
  extends Omit<FlexProps, 'flexDirection' | 'gap' | 'columnGap' | 'rowGap'> {
  /** Vertical spacing between children items (row-gap). */
  spacing?: TGlobalSpacing;
  /** If the children fit full width of the VFlex parent*/
  childrenFitFullWidth?: boolean;
  /** If the children fit full height of the VFlex parent. Firstly you should assign to the VFlex a bigger height than the one defined by its children. */
  childrenFitFullHeight?: boolean;
}

const InternalVFlex: React.FC<VFlexProps> = ({
  alignItems = 'flex-start',
  children,
  childrenFlex,
  childrenFitFullHeight = false,
  childrenFitFullWidth = true,
  justifyContent = 'flex-start',
  spacing = 'cmp-md',
  ...flexProps
}) => (
  <Flex
    {...flexProps}
    alignItems={childrenFitFullWidth ? 'stretch' : alignItems}
    childrenFlex={childrenFlex || (childrenFitFullHeight ? '1' : undefined)}
    flexDirection="column"
    justifyContent={justifyContent}
    rowGap={spacing}
  >
    {children}
  </Flex>
);

export const VFlex = InternalVFlex as typeof InternalVFlex & {
  Item: typeof VFlexItem;
};

VFlex.Item = VFlexItem;

InternalVFlex.displayName = 'VFlex';
VFlex.Item.displayName = 'VFlex.Item';

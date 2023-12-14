import * as React from 'react';

import { Flex, FlexProps } from '../';
import { GlobalSpacing } from '../../declarations';
import { FlexItem } from '../Flex/subcomponents';

export interface VFlexProps
  extends Omit<FlexProps, 'gap' | 'columnGap' | 'rowGap'> {
  /** Vertical spacing between children items (row-gap). */
  spacing?: GlobalSpacing;
  /** If the children fit full width of the VFlex parent*/
  childrenFitFullWidth?: boolean;
  /** If the children fit full height of the VFlex parent. Firstly you should assign to the VFlex a bigger height than the one defined by its children. */
  childrenFitFullHeight?: boolean;
}

const InternalVFlex: React.FC<VFlexProps> = ({
  alignItems = 'flex-start',
  children,
  childrenFitFullHeight = false,
  childrenFitFullWidth = false,
  justifyContent = 'flex-start',
  spacing = 'cmp-md',
  ...flexProps
}) => (
  <Flex
    {...flexProps}
    alignItems={childrenFitFullWidth ? 'stretch' : alignItems}
    childrenFlex={childrenFitFullHeight && '1'}
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

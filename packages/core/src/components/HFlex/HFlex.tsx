import * as React from 'react';

import { Flex, FlexProps } from '../';
import { GlobalSpacing } from '../../declarations';
import { FlexItem } from '../Flex/subcomponents';

export interface HFlexProps
  extends Omit<FlexProps, 'gap' | 'columnGap' | 'rowGap'> {
  /** If the children fit full width of the HFlex parent*/
  childrenFitFullWidth?: boolean;
  /** Horizontal spacing between children items (column-gap). */
  spacing?: GlobalSpacing;
}

const InternalHFlex: React.FC<HFlexProps> = ({
  alignItems = 'center',
  children,
  childrenFitFullWidth = false,
  spacing = 'cmp-md',
  ...flexProps
}) => (
  <Flex
    {...flexProps}
    alignItems={alignItems}
    childrenFlex={childrenFitFullWidth && '1'}
    columnGap={spacing}
    flexDirection="row"
    flexWrap="nowrap"
  >
    {children}
  </Flex>
);

export const HFlex = InternalHFlex as typeof InternalHFlex & {
  Item: typeof FlexItem;
};

HFlex.Item = FlexItem;

InternalHFlex.displayName = 'HFlex';

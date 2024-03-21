import * as React from 'react';

import { Flex, FlexProps } from '../Flex';
import { TGlobalSpacing } from '../../declarations';
import { FlexItem } from '../Flex/components';

export interface HFlexProps
  extends Omit<
    FlexProps,
    'flexDirection' | 'flexWrap' | 'gap' | 'columnGap' | 'rowGap'
  > {
  /** If the children fit full width of the HFlex parent*/
  childrenFitFullWidth?: boolean;
  /** Horizontal spacing between children items (column-gap). */
  spacing?: TGlobalSpacing;
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
HFlex.Item.displayName = 'HFlex.Item';

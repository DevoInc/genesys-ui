import * as React from 'react';

import { Flex, FlexProps } from '../';
import { GlobalSpacing } from '../../declarations';

export interface HFlexProps
  extends Omit<FlexProps, 'gap' | 'columnGap' | 'rowGap'> {
  /** If the children fit full width of the HFlex parent*/
  childrenFitFullWidth?: boolean;
  /** Horizontal spacing between children items (column-gap). */
  spacing?: GlobalSpacing;
}

export const HFlex: React.FC<HFlexProps> = ({
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

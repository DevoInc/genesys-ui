import * as React from 'react';

import { HFlex, type HFlexProps } from '../../../../../HFlex';

export interface StepperItemContainerProps
  extends Omit<HFlexProps, 'spacing'> {}

export const StepperItemContainer: React.FC<StepperItemContainerProps> = ({
  alignItems = 'center',
  as = 'li',
  children,
  ...restFlexProps
}) => (
  <HFlex {...restFlexProps} alignItems={alignItems} as={as} spacing="cmp-xs">
    {children}
  </HFlex>
);

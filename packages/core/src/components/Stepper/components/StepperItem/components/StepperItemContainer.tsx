import * as React from 'react';

import { HFlex, type HFlexProps } from '../../../../HFlex';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface StepperItemContainerProps
  extends Omit<HFlexProps, 'spacing'> {}

export const StepperItemContainer: React.FC<StepperItemContainerProps> = ({
  alignItems = 'center',
  as = 'li',
  children,
  ...restFlexProps
}) => {
  return (
    <HFlex {...restFlexProps} alignItems={alignItems} as={as} spacing="cmp-xs">
      {children}
    </HFlex>
  );
};

import * as React from 'react';

import { VFlex, VFlexProps } from '../../';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ProgressBarContainerProps
  extends Omit<VFlexProps, 'childrenFitFullWidth' | 'position' | 'spacing'> {}

export const ProgressBarContainer: React.FC<ProgressBarContainerProps> = ({
  children,
  width = '100%',
  ...VFlexProps
}) => {
  return (
    <VFlex
      {...VFlexProps}
      childrenFitFullWidth
      position="relative"
      spacing="cmp-xxs"
      width={width}
    >
      {children}
    </VFlex>
  );
};

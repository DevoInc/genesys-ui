import * as React from 'react';

import { VFlex, VFlexProps } from '../../';

import { BaseProgressBarProps } from '../declarations';

export interface ProgressBarContainerProps
  extends Omit<VFlexProps, 'childrenFitFullWidth' | 'position' | 'spacing'>,
    Pick<Partial<BaseProgressBarProps>, 'size'> {}

export const ProgressBarContainer: React.FC<ProgressBarContainerProps> = ({
  children,
  size,
  ...VFlexProps
}) => {
  return (
    <VFlex
      {...VFlexProps}
      childrenFitFullWidth
      position="relative"
      spacing={size === 'sm' ? 'cmp-xxs' : 'cmp-xs'}
    >
      {children}
    </VFlex>
  );
};
